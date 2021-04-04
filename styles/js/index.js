// NAV TOGGLE MOBILE
$('#nav .nav-ba-button button').on('click', function() {
    let dataSvg = $('#nav .nav-ba-button button').data('svg');
    if(dataSvg == 'menu') {
        $('#nav .nav-ba-button button').data('svg', 'close');
        $('#nav .nav-ba-button button').html(`
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id=" close">
            <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M25.1517 22.5005L33.2011 14.4511C33.9342 13.718 33.9342 12.533 33.2011 11.7998C32.468 11.0667 31.283 11.0667 30.5498 11.7998L22.5005 19.8492L14.4511 11.7998C13.718 11.0667 12.533 11.0667 11.7998 11.7998C11.0667 12.533 11.0667 13.718 11.7998 14.4511L19.8492 22.5005L11.7998 30.5498C11.0667 31.283 11.0667 32.468 11.7998 33.2011C12.1655 33.5667 12.6455 33.7505 13.1255 33.7505C13.6055 33.7505 14.0855 33.5667 14.4511 33.2011L22.5005 25.1517L30.5498 33.2011C30.9155 33.5667 31.3955 33.7505 31.8755 33.7505C32.3555 33.7505 32.8355 33.5667 33.2011 33.2011C33.9342 32.468 33.9342 31.283 33.2011 30.5498L25.1517 22.5005Z" fill="#2E3A59"/>
            </g>
            </svg>
        `);
        $('#nav .nav-ba-link').slideDown(200);
    } else {
        $('#nav .nav-ba-button button').data('svg', 'menu');
        $('#nav .nav-ba-button button').html(`
            <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id=" menu">
            <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M7.4025 11.25H37.5956C38.5744 11.25 39.375 12.0506 39.375 13.0294V13.2206C39.375 14.1994 38.5744 15 37.5956 15H7.4025C6.42375 15 5.625 14.1994 5.625 13.2206V13.0294C5.625 12.0506 6.42375 11.25 7.4025 11.25ZM37.5956 20.625H7.4025C6.42375 20.625 5.625 21.4256 5.625 22.4044V22.5956C5.625 23.5744 6.42375 24.375 7.4025 24.375H37.5956C38.5744 24.375 39.375 23.5744 39.375 22.5956V22.4044C39.375 21.4256 38.5744 20.625 37.5956 20.625ZM37.5956 30H7.4025C6.42375 30 5.625 30.8006 5.625 31.7794V31.9706C5.625 32.9494 6.42375 33.75 7.4025 33.75H37.5956C38.5744 33.75 39.375 32.9494 39.375 31.9706V31.7794C39.375 30.8006 38.5744 30 37.5956 30Z" fill="#2E3A59"/>
            </g>
            </svg>
        `);
        $('#nav .nav-ba-link').slideUp(200);
    }
});


// SLIDE TOGGLE KATALOG ASIDE
$('aside h6 span').on('click', function() {
    $(this).parents('.col-lg-12').next().find('li').slideToggle(200);
});

// SLIDE TOGGLE PILIH PROVINSI
$('.select-trigger').on('click', function() {
    $(this).find('.custom-select-ba').toggle(0);
});

// // RUBAH DATA PROVINSI, JIKA SUDAH DI PILIH
// $('#container-custom-select-ba .custom-select-ba').on('click', '.col-lg-12', function() {
//     let dataProvinsi = $(this).text();
//     $('.data-provinsi').text(dataProvinsi);
//     console.log(dataProvinsi);
//     // MUNGKIN JIKA MENGGUNAKAN AJAX
//     // $.ajax({
//     //     url: "#",
//     //     data: dataProvinsi,
//     //     success: function(result){
//     //     $(".tbody-ba-right").append(result);
//     // }});
// });


// PINDAH STEP KONTAK CIRCLE
$('#form-mobile #step-form-ba .step-1, #form-mobile #step-form-ba .step-2, #form-mobile #step-form-ba .step-3').on('click', function() {
    // AMBIL DATA STEP CLICK
    let dataStep = $(this).data('step');

    // ACTVIE CIRCLE & ACTIVE TEXT
    $('#step-form-ba .circle-ba, #step-form-ba .step-text').removeClass('active');
    $(this).find('.circle-ba').addClass('active');
    $(this).find('.step-text').addClass('active');

    // TOGGLE FORM
    $('.form-step-1, .form-step-2, .form-step-3').removeClass('active');
    $('.form-step-' + dataStep).siblings().slideUp(300);
    $('.form-step-' + dataStep).slideDown(300);
});

// PINDAH STEP CLICK BUTTON
$('#form-mobile .form-step-1 button, #form-mobile .form-step-2 button').on('click', function() {
    // AMBIL DATA BUTTON CLICK
    let dataButton = $(this).data('button');
    if(dataButton == 1) {
        // ACTVIE CIRCLE & ACTIVE TEXT
        $('#step-form-ba .step-1 .circle-ba, #step-form-ba .step-1 .step-text').removeClass('active');
        $('#step-form-ba .step-2').find('.circle-ba').addClass('active');
        $('#step-form-ba .step-2').find('.step-text').addClass('active');

        // TOGGLE FORM
        $('.form-step-1, .form-step-2, .form-step-3').removeClass('active');
        $('.form-step-2').siblings().slideUp(300);
        $('.form-step-2').slideDown(300);
    } else if(dataButton == 2) {
        // ACTVIE CIRCLE & ACTIVE TEXT
        $('#step-form-ba .step-2 .circle-ba, #step-form-ba .step-2 .step-text').removeClass('active');
        $('#step-form-ba .step-3').find('.circle-ba').addClass('active');
        $('#step-form-ba .step-3').find('.step-text').addClass('active');

        // TOGGLE FORM
        $('.form-step-1, .form-step-2, .form-step-3').removeClass('active');
        $('.form-step-3').siblings().slideUp(300);
        $('.form-step-3').slideDown(300);
    }
});