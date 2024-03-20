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


// Custom form field validator js
var requiredAccess = "<span class='dynamicAccess'> *</span>";
var requiredHackExp = "<span class='dynamicHackExp'> *</span>";

$("input[type='radio'][name=access-options]").change(function() {     
  if (this.value == 'Yes') {
      $("input[type='text'][name=access-needs]").attr('data-parsley-required', true);
      $(requiredAccess).appendTo("label[for='access-needs']");
  } else { 
      $("input[type='text'][name=access-needs]").removeAttr('data-parsley-required', false);
      $(".dynamicAccess").remove();
      $(".access-needs-input").removeClass("parsley-error");
      $(".access-needs-wrapper .parsley-errors-list").remove();
      $("input[type='text'][name=access-needs]").val('');
  }
});

$("input[type='radio'][name=hackathon-options]").change(function() {     
  if (this.value == 'Yes') {
      $("textarea[name=hack-exp-textarea]").attr('data-parsley-required', true);
      $(requiredHackExp).appendTo("label[for='hack-exp-textarea']");
  } else { 
      $("textarea[name=hack-exp-textarea]").removeAttr('data-parsley-required', false);
      $(".dynamicHackExp").remove();
      $(".hack-exp-input").removeClass("parsley-error");
      $(".hack-exp-wrapper .parsley-errors-list").remove();
      $("textarea[name=hack-exp-textarea]").val('');
  }
});


// Display user inputs in results table
function displayResults() {
  if ($('.form-section.confirmation-page').length > 0) {
    // Personal Information
    var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var emailAddy = $("#email").val();
    var phoneNum = $("#phone").val();
    var age = $("#age").val();
    var pronoun = $("#pronoun").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var city = $("#city").val();
  
    var ethnicBkgdsResults;
    var ethnicBkgds = $("#ethnicity").val();
    if ($("#ethnicity").length > 0) {
        if (ethnicBkgds.length > 1) {
            ethnicBkgdsResults = ethnicBkgds.join(', ');
        } else {
            ethnicBkgdsResults = ethnicBkgds;
        }
    }

    var otherEthnicity = $("#other-ethnicity").val();
    var veteran = $("input[type='radio'][name=vet-options]:checked").val();
    var occupation = $("#occupation").val();
    var school_company = $("#school").val();
    var jobTitle = $("#job_title").val();
    var primBkgd = $("#primary_background").val();

    var addlBkgdResults;
    var addlBkgd = $("#additional_background").val();
    if ($("#additional_background").length > 0) {
        if (addlBkgd.length > 1) {
            addlBkgdResults = addlBkgd.join(', ');
        } else {
            addlBkgdResults = addlBkgd;
        }
    }

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
    $("td#results_ethnicity").html(ethnicBkgdsResults);
    $("td#results_other_ethnicity").html(otherEthnicity);
    $("td#results_veteran").html(veteran);
    $("td#results_occupation").html(occupation);
    $("td#results_school_company").html(school_company);
    $("td#results_job_title").html(jobTitle);
    $("td#results_prim_bkgd").html(primBkgd);
    $("td#results_addl_bkgd").html(addlBkgdResults);
    $("td#results_linkedin").html(linkedin);

    // Logistics
    var travelOptions = $("input[type='radio'][name=travel-options]:checked").val();
    var hotelOptions = $("input[type='radio'][name=hotel-options]:checked").val();
    var accessOptions = $("input[type='radio'][name=access-options]:checked").val();
    var access_needs = $("#access-needs").val();

    var dietResults;
    var diet = $("#diet").val();
    if ($('#diet').length > 0) {
        if (diet.length > 1) {
            dietResults = diet.join(', ');
        } else {
            dietResults = diet;
        }
    }

    $("td#results_travel-options").html(travelOptions);
    $("td#results_hotel-options").html(hotelOptions);
    $("td#results_access-options").html(accessOptions);
    $("td#results_access-needs").html(access_needs);
    $("td#results_diet").html(dietResults);

    // Emergency Contact
    var emerName = $("#emer-name").val();
    var emerEmail = $("#emer-email").val();
    var emerPhone = $("#emer-phone").val();
    $("td#results_emer-name").html(emerName);
    $("td#results_emer-email").html(emerEmail);
    $("td#results_emer-phone").html(emerPhone);

    //Additional Information
    var affiliation = $("#affiliation").val();
    var preferredContact = $("#preferred-contact").val();
    var hear_about_us = $("#hear_about_us").val();
    var sponsorOptions = $("input[type='radio'][name=sponsor-options]:checked").val();
    var hackathonOptions = $("input[type='radio'][name=hackathon-options]:checked").val();
    var hackExp = $("#hack-exp-textarea").val();
    
    var techSkillsResults;
    var techSkills = $("#tech_skills").val();
    if ($('#tech_skills').length > 0) {
        if (techSkills.length > 1) {
            techSkillsResults = techSkills.join(', ');
        } else {
            techSkillsResults = techSkills;
        }
    }

    var teamSkillsResults;
    var teamSkills = $("#team_skills").val();
    if ($('#team_skills').length > 0) {
        if (teamSkills.length > 1) {
            teamSkillsResults = teamSkills.join(', ');
        } else {
            teamSkillsResults = teamSkills;
        }
    }

    var clinicalSkillsResults;
    var clinicalSkills = $("#clinical_skills").val();
    if ($('#clinical_skills').length > 0) {
        if (clinicalSkills.length > 1) {
            clinicalSkillsResults = clinicalSkills.join(', ');
        } else {
            clinicalSkillsResults = clinicalSkills;
        }
    }

    var skillsExp = $("#exp-skills-textarea").val();

    $("td#results_affiliation").html(affiliation);
    $("td#results_preferred-contact").html(preferredContact);
    $("td#results_hear_about_us").html(hear_about_us);
    $("td#results_sponsor-options").html(sponsorOptions);
    $("td#results_hackathon-options").html(hackathonOptions);
    $("td#results_hack-exp-textarea").html(hackExp);
    $("td#results_tech_skills").html(techSkillsResults);
    $("td#results_team_skills").html(teamSkillsResults);
    $("td#results_clinical_skills").html(clinicalSkillsResults);
    $("td#results_exp-skills-textarea").html(skillsExp);

    // Questions
    var healthcare = $("#healthcare-textarea").val();
    var expGain = $("#exp-gain-textarea").val();
    var viewsGain = $("#views-textarea").val();
    var hackOptions = $("input[type='radio'][name=hacka-options]:checked").val();
    var checkAcknowledge = $("#check-acknowledge").val();
    var checkAcknowledge1 = $("#check-acknowledge1").val();
    var checkAcknowledge2 = $("#check-acknowledge2").val();
    
    $("td#results_healthcare-textarea").html(healthcare);
    $("td#results_exp-gain-textarea").html(expGain);
    $("td#results_views-textarea").html(viewsGain);
    $("td#results_hack-options").html(hackOptions);
    $("td#results_check-acknowledge").html(checkAcknowledge);
    $("td#results_check-acknowledge1").html(checkAcknowledge1);
    $("td#results_check-acknowledge2").html(checkAcknowledge2);
  }
} 

if ($('#nextBtn4').length > 0) {
  document.getElementById("nextBtn4").addEventListener("click", displayResults);
}


