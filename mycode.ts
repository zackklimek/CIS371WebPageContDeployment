/************************************************************
 * Zack Klimek
 * CIS 371-02
 * 2-10-2023
 * Generate HTML from TS
 * *********************************************************/
console.log("Hello World");

// Area 4
type Course = {
	courseNumber: string;
	courseName: string;
	semesterTaken: string;
};

const myCourses: Array<Course> = [
	{
		courseNumber: "Course Number",
		courseName: "Course Name",
		semesterTaken: "Course Semester"
	}	,	
	{
		courseNumber: "457",
		courseName: "Data Communications",
		semesterTaken: "Fall 2022"
	},
	{
		courseNumber: "467",
		courseName: "Computer Science Project",
		semesterTaken: "Fall 2022"
	},
	{
		courseNumber: "490",
		courseName: "Internship",
		semesterTaken: "Spring/Summer 2022"
	},
	{
		courseNumber: "452",
		courseName: "Operating Systems",
		semesterTaken: "Winter 2022"
	},
	{
		courseNumber: "335",
		courseName: "Data Mining",
		semesterTaken: "Winter 2022"
	},
];

const tArea4 = document.getElementById("area4-table")
const table4 = document.createElement("table");

myCourses.forEach((course) => {
	const courseTr = document.createElement("tr")
	for(let attr in course){
		const tempTd = document.createElement("td")
		tempTd.innerText = course[attr]
		courseTr.appendChild(tempTd)
	}
	table4.appendChild(courseTr);
})

tArea4?.appendChild(table4);

// Area 6
type Company = {
	name: string,
	abbreviation: string,
	url: string
}

const myCompanies: Array<Company> = [
	{ name: "Apple", abbreviation: "AAPL", url:"https://www.apple.com" },
	{ name: "IBM", abbreviation: "IBM", url:"https://www.ibm.com/" },
	{ name: "META", abbreviation: "META", url:"https://www.meta.com/" },
	{ name: "Microsoft", abbreviation: "MSFT", url:"https://www.microsoft.com/" }
	
]

const ulArea6 = document.getElementById("area6-ul")
const ul6 = document.createElement("ul");

myCompanies.forEach((company) => {
	const companyLi = document.createElement("li");
	const companyA = document.createElement("a");
	
	companyA.href = company.url;
	companyA.innerText = company.abbreviation;
	companyLi.appendChild(companyA);
	ul6.appendChild(companyLi)
})
ulArea6?.appendChild(ul6);

// Area 8
type SocialMedia = {
	icon: string;
	url: string;
}

const mySocialMedia: Array<SocialMedia> = [
	{url:"https://www.amazon.com", icon:"assets/amazon_icon.png"},
	{url:"https://www.github.com", icon:"assets/github_icon.png"},
	{url:"https://www.hackerrank.com", icon:"assets/hackerrank_icon.jpeg"},
	{url:"https://www.kaggle.com", icon:"assets/kaggle_icon.png"},
	{url:"https://www.linkedin.com", icon:"assets/linkedin_icon.png"},
	{url:"https://www.twitter.com", icon:"assets/twitter_icon.png"},
]

const area8 = document.getElementById("area8")
mySocialMedia.forEach((site) => { 
	const siteA = document.createElement("a")
	siteA.setAttribute("href", site.url)

	const imgA = document.createElement("img");
	imgA.setAttribute("id", "icon")
	imgA.setAttribute("src", site.icon)
	console.log(site.icon)

	siteA.appendChild(imgA);
	area8?.appendChild(siteA);
})