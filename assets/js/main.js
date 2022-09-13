var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        990: {
            slidesPerView: 2,
            spaceBetween: 60,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
        1600: {
            slidesPerView: 3,
            spaceBetween: 60,
        }
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
});

//////////////////


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});


////////////////////////

$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

///////////////////////////////////////
// Navbar scroll

$(window).on('scroll', function () {
    if ($(window).scrollTop() > 200) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

});
///////////////////////////////

/////////////////////////////////////////////
/////// COUNTER

var counted = 0;

$(window).scroll(function () {
    if (document.querySelector("#counter")) {


        var oTop = $('#counter').offset().top - window.innerHeight;
        if (counted == 0 && $(window).scrollTop() > oTop) {
            $('.count').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                    countNum: countTo
                },

                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                            //alert('finished');
                        }

                    });
            });
            counted = 1;
        }

    }


});


//////////////////////////////////////////
// Navbar-scroll

$('a[href^="#"]').on('click', function (e) {
    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 70
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});



////////// Registration ////////
///////////////////////////////

const registerSelect = document.querySelector('#registerSelect')
const registerBtn = document.querySelector('.registerBtn')


if (registerSelect) {
    let formInputs = document.querySelectorAll(".registerFormInput")
    $(".registerFormInput").remove()
    registerBtn.classList.add("d-none")




    registerSelect.addEventListener("change", () => {

        var selectedOption = registerSelect.options[registerSelect.selectedIndex].value;
        var selectedText = registerSelect.options[registerSelect.selectedIndex].text;


        console.log(`form--${selectedOption}`);
        $(".registerFormInput").remove()
        if (selectedOption) {
            registerBtn.classList.remove("d-none")

            formInputs.forEach((el) => {
                if (el.classList.contains(`form--common`)) {
                    $(".registerSelect-block").after(`${el.outerHTML}`)
                }

                if (el.classList.contains(`form--${selectedOption}`)) {
                    $(".registerSelect-block").after(`${el.outerHTML}`)
                }
            })

            populateCountries("country", "state");

            //////////////////////////////////////////////////
            // img preview

            //for image preview
            const imgUploadProfile = document.querySelector('#img-upload')
            const imgPreviewRemove = document.querySelector('.register__preview-remove')


            if (imgUploadProfile) {

                imgUploadProfile.onchange = function (event) {

                    let preview = document.querySelector('.register__preview-img');
                    previewImage(event, preview);

                }

            }
            // for removing image

            if (imgPreviewRemove) {

                imgPreviewRemove.onclick = function () {

                    let file = document.querySelector('#img-upload');
                    let preview = document.querySelector('.register__preview-img');
                    removeImage(file, preview);
                }

            }

            function previewImage(event, preview) {

                if (event.target.files.length > 0) {
                    let img = URL.createObjectURL(event.target.files[0]);
                    preview.src = img;
                    preview.parentNode.style.display = 'flex';
                }

                else {
                    preview.parentNode.style.display = 'none';
                }

            }

            function removeImage(file, preview) {
                preview.src = '#';
                preview.parentNode.style.display = 'none';
                file.value = '';
            }

        } else {
            registerBtn.classList.add("d-none")

        }
    })

}



///////////////////////////////////////////////
// add experience

const addBtn = document.querySelector("#add_experience_profile");
const addExpDiv = document.querySelector(".add_experience_profile-block");
const addEduBtn = document.querySelector("#add_education_profile");
const addEduDiv = document.querySelector(".add_education_profile-block");
const addAwardDiv = document.querySelector(".add_award_profile-block");
const addAwardBtn = document.querySelector("#add_award_profile");
const addInputExpFunction = (expEduinput, expEduBtn, expEduDiv) => {
    let val = 0;
    const expEduInput = document.querySelectorAll(`.edProfile${expEduinput}__input`);

    expEduInput.forEach((el) => {
        if (el.value.length == 0) {
            val++;
        }

    })
    if (val === 0) {
        $(`#add_${expEduBtn}_profile`).before(`${expEduDiv.outerHTML}`)
    } else {
        alert("Enter value in all field")

    }
}
if (addExpDiv)
    addBtn.addEventListener("click", addInputExpFunction.bind(this, "Exp", "experience", addExpDiv))
if (addEduDiv)
    addEduBtn.addEventListener("click", addInputExpFunction.bind(this, "Edu", "education", addEduDiv))
if (addAwardDiv)
    addAwardBtn.addEventListener("click", addInputExpFunction.bind(this, "Award", "award", addAwardDiv))





const removeExp = (e) => {
    console.log(e);
    let currentDiv = e.closest(".add_experience_profile-block")

    console.log(currentDiv);

    if (document.querySelectorAll(".add_experience_profile-block").length > 1)
        $(currentDiv).remove();
    else {
        $(currentDiv).remove();
        addInputExpFunction("Exp", "experience", addExpDiv);
    }
}
const removeEdu = (e) => {
    console.log(e);
    let currentDiv = e.closest(".add_education_profile-block")

    console.log(currentDiv);

    if (document.querySelectorAll(".add_education_profile-block").length > 1)
        $(currentDiv).remove();
    else {
        $(currentDiv).remove();
        addInputExpFunction("Edu", "education", addEduDiv);
    }
}
const removeAward = (e) => {
    console.log(e);
    let currentDiv = e.closest(".add_award_profile-block")

    console.log(currentDiv);

    if (document.querySelectorAll(".add_award_profile-block").length > 1)
        $(currentDiv).remove();
    else {
        $(currentDiv).remove();
        addInputExpFunction("Award", "award", addAwardDiv);
    }
}



////////////////////////////////
// user nav
const userProfileBtn = document.querySelector(".user-mobile");
const userProfilClose = document.querySelector(".user-mobile--close");
const userProfileLinks = document.querySelectorAll(".user-mobile--links");
if (userProfileBtn) {
    userProfileBtn.addEventListener("click", () => {
        userProfileLinks.forEach(el => {
            el.classList.toggle("d-none")
        }

        )
        userProfileBtn.classList.toggle("d-none")
    })

    userProfilClose.addEventListener("click", () => {
        userProfileLinks.forEach(el => {
            el.classList.toggle("d-none")
        }

        )
        userProfileBtn.classList.toggle("d-none")
    })
}

/////////////////////////////////////////////////////
// Mobile menu
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")
overlay.classList.add("hidden")

function mobileMenu() {
    openBtn.classList.add("active");
    nav_list.classList.add("active")
    overlay.classList.remove("hidden")
}
function mobileMenuClose() {
    openBtn.classList.remove("active");
    nav_list.classList.remove("active")
    overlay.classList.add("hidden")
}


openBtn.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenuClose)
overlay.addEventListener("click", mobileMenuClose)

/////////////////////////////////////////////////////
// scroll

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// //////////////////
//GALLERY

