///////////////////////////
// Where the JSON's live //
///////////////////////////
var bio = {
	"name" : "Mark Weigel",
	"role" : "Web Developer",
	"contacts" : {
		"mobile" : "267-603-2621",
		"email" : "markweig@gmail.com",
		"github" : "https://github.com/mrkjesus2",
		"twitter" : "https://twitter.com/markweig",
		"location" : "Philadelphia, PA",
		"blog" : "http://weigel.site"
	},
	"welcomeMessage" : "This is a test message",
	"skills" : [
		"HTML 5",
		"CSS",
		"Javascript",
		"Git",
		"Gulp",
		"JQuery",
		"Windows",
		"Linux"
	],
	"picURL" : "images/Profile.jpg"
};

var projects = {
	"projects": [
		{
			"title": "Portfolio",
			"dates": "2015",
			"description": "This was the first project that I completed as part of my Front-End Nanodegree at Udacity.com." +
				" I was given a comp and expected to make a responsive site that matched the given design." +
				" I wrote a simple CSS grid as well as all of the necessary HTML. The \"picture\" and" +
				" \"source\" elements were utilized to provide responsive images saving critical bandwidth for mobile users." +
				" SVG icons were also used to take advantage of their ability to scale without pixelation.",
			"images": ["images/portfolio-1.png", "images/portfolio-2.png"]
		},{
			"title": "Resume",
			"dates": "2015",
			"description": "This was the second project that I completed for the Udacity Front-End Nanodegree" +
				" It served as an introduction to JSON, Jquery, and Javascript. The concept was to use JSON objects" +
				" to provide the information that will be displayed on the web page, laying the groundwork for working" +
				" with data received from API's.",
			"images": ["images/resume-1.png", "images/resume-2.png"]
		}
	]

};

var work = {
	"jobs": [
		{
			"employer": "Rattle Clack Entertainment",
			"title": "Freelance A/V Tech",
			"location": "Pitsburgh, PA",
			"dates": "June 2014 - Present",
			"description": "Freelance work for a small A/V company that provides services for conferences." +
				" I loaded and unloaded gear that was required for the conference, ran cables(power, audio, and visual)," +
				" controlled video switchers and soundboards, and set up stages(pipe and drape, projector screens, etc.)"
		},{
			"employer": "Amis Trattoria",
			"title": "Server",
			"location": "Philadelphia, PA",
			"dates": "July 2012 - Present",
			"description": "A rustic Italian restaurant that renowned chef Marc Vetri opened as his 3rd restaurant." +
				" I ensure guest satisfaction 100% of the time in a fast-paced chef-driven environment" +
				" by maintaining a thorough knowledge of the menu and the preparation of all items to accommodate" +
				" allergies/preferences of the guests, achieving a cordial rapport with guests, and upholding" +
				" impeccable service standards."
		},{
			"employer": "South Philadelphia Tap Room",
			"title": "Manager/Bartender",
			"location": "Philadelphia, PA",
			"dates": "August 2011 - July 2012",
			"description": "Neighborhood Gastropub specializing in craft beer. I worked with a team of managers" +
				" to help plan events and keep the bar running efficiently. Keeping the staff's knowledege of" +
				" craft beers up to date was a key responsibility. I also incorporated dropbox into our workflow" +
				" so that beer schedules were more easily maintained."
		},{
			"employer": "Caribou Cafe",
			"title": "General Manager",
			"location": "Philadelphia, PA",
			"dates": "October 2008 - August 2011",
			"description": "French Bistro in the heart of Center City focusing on \"peasant food\". My task was" +
				" to run the restaurant\"as if I was the owner.\" I was responsible for scheduling, maintenance," +
				" beverage ordering, and managing the floor during service. I received accolades for lowering liqour" +
				" cost while maintaining stock based on usage and keeping costs under control."
		},{
			"employer": "Smashed Cat Studios",
			"title": "Audio Engineer/Acoustic Designer",
			"location": "Philadelphia, PA",
			"dates": "2009 - 2011",
			"description": "Due to my experience with recording equipment, I was allowed to move my gear" +
				" into the studio and help with productions. In short time, I realized that the room did" +
				" not sound good enough for quality recordings, so I did an acoustic analysis and acquired" +
				" audio treatment(bass traps and some high frequency solutions) to improve the sound of our" +
				" recordings. When the owner was unavailable, I ran hip-hop session with a great response" +
				" from the artist."
		},{
			"employer": "Comedy Cellar",
			"title": "Server",
			"location": "New York, NY",
			"dates": "June 2007 - October 2008",
			"description": "A staple in the East Village of New York, there were a number of A-list" +
				" comedians that performed at this club. It was challenging work environment due to" +
				" all patrons being served as soon as the show started, meaning there were 30 guests" +
				" that I had to attend to instantly."
		},{
			"employer": "Vestals",
			"title": "Bass Player",
			"location": "Minneapolis and anywhere necessary",
			"dates": "2004 - 2007",
			"description": "Pop/Rock band that debuted on the college music charts in the Top 100." +
				" I learned the debut record over the course of a week and when auditioned was offered the gig" +
				" on the spot. Two weeks later I was performing for the record release. We toured the East and" +
				" West Coast in addition to countless weekend trips throughout the Midwest in support of the album." +
				" When it was time to record the second album, I was involved from ??????"
		},{
			"employer": "Timberlodge Steakhouse",
			"title": "Head Bartender",
			"location": "Roseville, MN",
			"dates": "March 2001 - May 2007",
			"description": "Regional Steakhouse chain where I learned the ropes of working in a restaurant" +
				" I promptly earned the daytime bartender position and continued learning more about the" +
				" business. It didn't take long before I was called upon, out of necessity, to cover a dinner" +
				" shift on the bar. After exceeding everybodies expectations, including mine, there were regular" +
				" dinner shifts available to me. After the first location where I worked was bought by another" +
				" restaurant chain, I moved the Roseville location to be the head bartender where I worked with" +
				" the General Manager to lower liqour cost from 30% to 22%."
		},{
			"employer": "September's Child",
			"title": "Bass Player",
			"location": "Minneapolis",
			"dates": "1998 - 2002",
			"description": "Rock band inspired by the Replacements that was voted the Best New Band by the" +
				" City Pages in 1998. After my first rock band dissolve, I auditioned for this group which" +
				" despite my youth, welcomed me to join the band thanks to my proficiency. We quickly became" +
				" a routinely hired group and were even pursued by a representative from Geffen records."
		}
	]
};

var education = {
	"schools": [
		{
			"name" : "Normandale Community College",
			"location" : "Bloomington, MN",
			"degree" : "No degree received",
			"majors" : ["Engineering Prerequisites"],
			"dates" : "2001 - 2003",
			"url" : "Put your course info here"
		},{
			"name" : "University of Minnesota",
			"location" : "Minneapolis,MN",
			"majors" : ["Liberal Arts"],
			"degree" : "No degree recieved",
			"dates": "1997 - 1999",
			"url" : "Put your course info here"
		},{
			"name" : "Cooper High School",
			"location" : "Plymouth, MN",
			"majors" : ["College Prep"],
			"degree" : "Diploma",
			"dates": 1998,
			"url" : "Put your course info here"
		}
	],
	"onlineCourses": [
		{
			"title" : "Front-End Nanodegree",
			"school" : "Udacity",
			"dates" : 2015 - 2016,
			"url" : "http://www.udacity.com/"
		}
	]
};

//////////////////////////////////
// All of the display functions //
//////////////////////////////////
bio.display = function() {
	//Declare variables for shorter lines later
	var name, role, welcomeMsg, picURL;
	var mobile, email, twitter, github, blog, location;
	var cont = bio.contacts;
	var data = '%data%';
	var header = $('.static');

	//Replace the given HTML with object data
	//Header info
	name = HTMLbioName.replace(data, bio.name);
	role = HTMLbioRole.replace(data, bio.role);
	welcomeMsg = HTMLbioWelcomeMsg.replace(data, bio.welcomeMessage);
	picURL = HTMLbioPicURL.replace(data, bio.picURL);

	// Contact Info
	mobile = HTMLbioMobile.replace(data, cont.mobile);
	email = HTMLbioEmail.replace(data, cont.email);
	twitter = HTMLbioTwitter.replace(data, cont.twitter);
	github = HTMLbioGithub.replace(data, cont.github);
	blog = HTMLbioBlog.replace(data, cont.blog);
	location = HTMLbioLocation.replace(data, cont.location);

	//Append the new HTML to the page
	header.prepend(name, role);
	header.append(picURL, welcomeMsg);
	$('#topContacts').append(mobile, email, location);
	$('#footerContacts').append(mobile, email, github, blog, twitter);

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);
		bio.skills.forEach(function(skill) {
			$('#skills').append(HTMLskills.replace(data, skill));
		});
	}
};

education.display = function() {
	// Save some lookups
	var education = $('#education');
	// School Loop to replace and append
	this.schools.forEach(function(school) {
		var name, location, degree, dates, url, majors;
		var data = '%data%';

		// Replace with object data
		url = school.url;
		name = HTMLschoolName.replace(data, school.name).replace('#', url);
		location = HTMLschoolLocation.replace(data, school.location);
		degree = HTMLschoolDegree.replace(data, school.degree);
		dates = HTMLschoolDates.replace(data, school.dates);

		// Append new HTML
		education.append(HTMLschoolStart);
		$('.education-entry:last').append(name + degree, dates, location);
		school.majors.forEach(function(major) {
			var mjr = HTMLschoolMajors.replace(data, major);
			$('.education-entry:last').append(mjr);
		});
	});
	// Append Online Course header
	education.append(HTMLonlineClasses);
	// Online Course loop to replace and append
	this.onlineCourses.forEach(function(course) {
		var title, school, dates, url;
		var data = '%data%';

		//Replace with object data
		title = HTMLonlineTitle.replace(data, course.title).replace('#', course.url);
		school = HTMLonlineSchool.replace(data, course.school);
		dates = HTMLonlineDates.replace(data, course.dates);
		url = HTMLonlineURL.replace(data, course.url).replace('#', course.url);

		//Append new HTML
		education.append(HTMLschoolStart);
		$('.education-entry:last').append(title + school, dates, url);
	});
};

projects.display = function() {
	// Project loop to replace and append
	this.projects.forEach(function(project) {
		var title, dates, desc;
		var data = '%data%';

		// Replace HTML with object data
		title = HTMLprojectTitle.replace(data, project.title);
		dates = HTMLprojectDates.replace(data, project.dates);
		desc = HTMLprojectDescription.replace(data, project.description);

		// Append to page
		$('#projects').append(HTMLprojectStart);
		$('.project-entry:last').append(title, dates, desc);

		// All of the above for the image array
		project.images.forEach(function(image){
			var projImage = HTMLprojectImage.replace(data, image);
			$('.project-entry:last').append(projImage);
		});
	});
};

work.display = function() {
	// Job Loop to replace and append data
	this.jobs.forEach(function(job) {
		// Declare vars for shorter lines later
		var employer, title, where, dates, desc;
		var data = '%data%';

		// Replace given HTML with data from object
		employer = HTMLworkEmployer.replace(data, job.employer);
		title = HTMLworkTitle.replace(data, job.title);
		dates = HTMLworkDates.replace(data, job.dates);
		where = HTMLworkLocation.replace(data, job.location);
		desc = HTMLworkDescription.replace(data, job.description);

		//Append the replaced HTML to the page
		$('#workExperience').append(HTMLworkStart);
		$('.work-entry:last').append(employer + title, dates, where, desc);
	});
};

////////////////////////////
// Call display functions //
////////////////////////////
education.display();
projects.display();
work.display();
bio.display();

///////////////////////////////
// Extras from the JS course //
///////////////////////////////


$('#mapDiv').append(googleMap);

/*$('#main').append(internationalizeButton);
function inName() {
	var nameArray = bio.name.split(' ');
	firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
	lastName = nameArray[1].toUpperCase();
	return firstName + ' ' + lastName;
}*/

