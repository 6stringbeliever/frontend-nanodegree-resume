var bio = {
			"name" : "Shaun Owen Kelly",
			"role" : "MS HCI | User Experience | Front-End Dev",
			"contact" : {
							"email" : "shaunkelly@gmail.com",
							"twitter" : "@6stringbeliever",
							"github" : "6stringbeliever",
							"blog" : "http://superawesomegood.com" },
			"pictureurl" : "http://superawesomegood.com/wp-content/uploads/2010/09/IMG_20130226_211504.jpg",
			"skills" : ["HTML", "CSS", "JavaScript", "jQuery", "Sass", "git", "Bootstrap"]
			};

var work = { "positions" : [ 
              { "name" : "Senior Technical Writer",
                "company" : "Shoap Technical Services",
                "city" : "Atlanta, GA",
                "start" : 2003,
                "end" : "current",
                "description" : "Do some stuff"
              },
              { "name" : "Freelance Mobile Developer",
                "company" : "Freelance/Independent",
                "city" : "Atlanta, GA",
                "start" : 2008,
                "end" : 2010,
                "description" : "Do some stuff"
              }
              ]
};

var education = { "schools" : [
					{ "name" : "Iowa State University",
					"city" : "Ames, IA",
					"degree" : "MS",
					"majors" : ["Human Computer Interaction"],
					"graduation" : 2013 },
					{ "name" : "Kenyon College",
					"city" : "Gambier, OH",
					"degree" : "BA",
					"majors" : ["Psychology", "English"],
					"graduation" : 2002 }
					],
					"onlinecourses" : [{
  					"name" : "Front-End Web Development Nanodegree",
  					"school" : "Udacity",
  					"dates" : "December 2014",
  					"url" : ""
					}]};
				
var projects = { "projects" : [
          { "title" : "shaunandmaura.com",
            "date" : "12/13/14",
            "description" : "Single page, responsive design.",
            "images" : []
          }]};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

var formattedContact = "";
var formattedSkills = "";

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);



if (bio.skills != undefined) {
  $('#header').append(HTMLskillsStart);
  // Generate formatted skills list
  for (var i = 0; i < bio.skills.length; i++) {
  	formattedSkills += HTMLskills.replace('%data%', bio.skills[i]);
  }
  $('#skills').append(formattedSkills);
}


projects.display = function() {
  for (var proj in projects.projects) {
    var currentproj = this.projects[proj];
    var formattedTitle = HTMLprojectTitle.replace('%data%', currentproj.title);
    var formattedDate = HTMLprojectDates.replace('%data%', currentproj.date);
    var formattedDescription = HTMLprojectDescription.replace('%data%', currentproj.description);
    //HTMLprojectImage
    $('#projects').append(HTMLprojectStart);
    $('.project-entry:last').append(formattedTitle).append(formattedDate).append(formattedDescription);
    if(currentproj.images.length > 0) {
      console.log('Has images');
      var formattedImages = '';
      for (var i = 0; i < currentproj.images.length; i++) {
        formattedImages += HTMLprojectImage.replace('%data%', currentproj.images[i]);
      }
      $('.project-entry:last').append(formattedImages);
    }

  }
}
projects.display();


$('#map');
/*



// Generate formatted contact list
for (var contact in bio.contact) {
	var replacement = HTMLcontactGeneric.replace('%contact%', contact);
	var replacement = replacement.replace('%data%', bio.contact[contact]);
	formattedContact += replacement;
}




$('#topContacts').prepend(formattedContact);

$('#skills').append(formattedSkills);
$('#workExperience').append(work["position"]);
$('#education').append(education.school);
*/