$(function () {
  var $sections = $('.form-section');

  function navigateTo(index) {
    // Mark the current section with the class 'current'
    $sections
      .removeClass('current')
      .eq(index)
        .addClass('current');
    // Show only the navigation buttons that make sense for the current section:
    $('.form-navigation .previous').toggle(index > 0);
    var atTheEnd = index >= $sections.length - 1;
    $('.form-navigation .next').toggle(!atTheEnd);
    $('.form-navigation [type=submit]').toggle(atTheEnd);
  }

  function curIndex() {
    // Return the current index by looking at which section has the class 'current'
    return $sections.index($sections.filter('.current'));
  }

  // Previous button is easy, just go back
  $('.form-navigation .previous').click(function() {
    navigateTo(curIndex() - 1);
  });

  // Next button goes forward if current block validates
  $('.form-navigation .next').click(function() {
    $('.form-registration').parsley().whenValidate({
      group: 'block-' + curIndex()
    }).done(function() {
      navigateTo(curIndex() + 1);
    });
  });

  // Prepare sections by setting the `data-parsley-group` attribute to 'block-0', 'block-1', etc.
  $sections.each(function(index, section) {
    $(section).find(':input').attr('data-parsley-group', 'block-' + index);
  });
  navigateTo(0); // Start at the beginning
});


// Display user inputs in results table
function displayResults() {
  if ($('.form-section.confirmation-page').length > 0) {
    // Section 1
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var emailAddy = $("#email").val();
    var phoneNum = $("#phone").val();
    var age = $("#age").val();
    var pronoun = $("#pronoun").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var ethnicity = $("#ethnicity").val();
    var otherEthnicity = $("#other-ethnicity").val();
    var veteran = $("input[type='radio'][name=vet-options]:checked").val();
    var occupation = $("#occupation").val();
    var school_company = $("#school").val();
    var jobTitle = $("#job_title").val();
    var primBkgd = $("#primary_background").val();
    var addlBkgd = $("#additional_background").val();
    var resume = $("#resume").val();
    var linkedin = $("#linkedin").val();
    $("td#results_fname").html(firstName);
    $("td#results_lname").html(lastName);
    $("td#results_email").html(emailAddy);
    $("td#results_phone").html(phoneNum);
    $("td#results_age").html(age);
    $("td#results_pronoun").html(pronoun);
    $("td#results_country").html(country);
    $("td#results_state").html(state);
    $("td#results_city").html(city);
    $("td#results_ethnicity").html(ethnicity);
    $("td#results_other_ethnicity").html(otherEthnicity);
    $("td#results_veteran").html(veteran);
    $("td#results_occupation").html(occupation);
    $("td#results_school_company").html(school_company);
    $("td#results_job_title").html(jobTitle);
    $("td#results_prim_bkgd").html(primBkgd);
    $("td#results_addl_bkgd").html(addlBkgd);
    $("td#results_resume").html(resume);
    $("td#results_linkedin").html(linkedin);
  }
} 

document.getElementById("nextBtn").addEventListener("click", displayResults);

$("span.placeholder").html("Select all that apply");
