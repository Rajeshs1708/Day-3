// 1.For the given JSON iterate over all for loops (for, for in, for of, forEach)


let obj=[{
    name:"Rajesh",
    age:25,
    sex:"Male",
    state:"Tamil Nadu",
    district:"Chennai"
},{
    name:"Manikandan",
    age:26,
    sex:"Male",
    state:"Kerala",
    district:"Thiruvananthapuram"
}];
// for
for(let i=0;i<obj.length;i++){
    console.log(obj[i].name)
};

//for of
for(let i of obj){
    console.log(i.age);
}

//for in
for(let o in obj){
    console.log(obj[o].state);
}

// for each
    obj.forEach(a =>{console.log (a.district)});

//-------------------------------------------------------------------------------



//2.Create your own resume data in JSON format

let resume={
    "basics": {
      "name": "Rajesh S",
      "email": "rajeshs1097@gmail.com",
      "phone": 8637656612,
      "degree": "B.Tech(Civil Engineering)",
      "location": {
        "address": "No 10,Bharathidasan street, TMP nagar,padi",
        "postalCode": 600050,
        "city": "Chennai",
        "region": "Hindu"
      },
    "profiles": [
        {
          "network": " LinkedIn, Twitter",
          "username": "Rajesh s",
          "url": "*************"
        }
      ]
    },
    "work": [
       {
        "organization": "VISHAL BUILDERS",
        "position": "Site supervisor",
        "startDate": 2018-06-25,
        "endDate": 2020-02-10,
        "teamSize": 25,
        "jobDescription": ["Supervision of construction activities","Supervision of construction activities","Preparing work chart schedule & Bar Bending schedule","Allotting works to labours","Prepare Bill of quantity","Sending daily progress report to higher authority."] 
      },{
        "organization": "CREATIVE CONSTRUCTION",
        "position": "Site supervisor",
        "startDate": 2020-09-01,
        "endDate": 2021-05-07,
        "teamSize": 25,
        "jobDescription": ["Supervision of construction activities","Supervision of construction activities","Preparing work chart schedule & Bar Bending schedule","Allotting works to labours","Prepare Bill of quantity","Sending daily progress report to higher authority."]  
      },{
        "organization": "M.R.M ENTERPRISES",
        "position": "Accountant",
        "startDate": 2021-06-25,
        "endDate": "Till now",
        "teamSize": 5,
        "jobDescription":["PO billing update","Preparing Stack report and oustanding report","Solve Pending DOA cases","Maintain Target report"]  
      }
    ],
    "coCurricularActivities": [
      {
        "projectName":"Major project on “ANALYSIS AND DESIGN OF EGMORE JUNCTION WITH TRAFFIC SIGNAL FEASIBILITY STUDY”.", 
        "projectDuration": "6 Month"
      },{
        "projectName":"Mini project on “TIME AND COST ANALYSIS OF PRE CAST BUILDING AND CONVENTIONAL BUILDING”.", 
        "projectDuration": "6 Month"
      },{
        "projectName":"Minor project on “3D AND 2D MODELLING OF SRM AUTOMOBILE HANGER”.", 
        "projectDuration": "6 Month"
      }
    ],
    "education": [
      {
        "institution": "SRM INSTITUTE OF SCIENCE AND TECHNOLOGY",
        "area": "kattankulathur chennai",
        "studyType": "Full time",
        "startDate": 2014,
        "endDate": 2018,
        "percentageOrCgpa": "8.21cgpa",
      },{
        "institution": "Vijayanta Hr. Sec. School",
        "area": "Avadi chennai",
        "studyType": "Full time",
        "startDate": 2012,
        "endDate": 2014,
        "percentageOrCgpa": "91.41%",
      },{
        "institution": "Britannia High School",
        "area": "Padi chennai",
        "studyType": "Full time",
        "startDate": 2010,
        "endDate": 2012,
        "percentageOrCgpa": "89.20%",
      }
    ],
    "achievement": [
      {
        "title":"School Second in HSC." ,
        "date": 2014, 
      },{
        "title": "Awarded full scholarship to study undergraduate degree via PUTHIYA THALAIMURAI  FOUNDATION.",
        "date": 2014, 
      },{
        "title": "Runner up hostel cricket  tournament.",
        "date": "2017", 
      },{
        "title": "Hostel cricket tournament winners.",
        "date": "2018", 
      }
    ],
    
    "skills": [
      {
        "name": "Programming Languages",
        "level": "Intermediate",
        "keywords": ["('HTML 5', 'Css 3', 'Javascript')"]
      },{
        "name": "Civil Engineering",
        "level": "Intermediate",
        'keywords': ["('AutoCADD', 'STAAD pro','MS office')"]
      }
    ],
    "languages": [
      {
       "language": "Tamil",
       "fluency": "Excellent"
      },{
        "language": "English",
        "fluency": "Intermediate"
       }
    ],
    "interests": [
      {
        "name": "Sports",
        "keywords": [" 'Cricket', 'Chess', 'Carrom','Badminton' "]   
      },{
        "name": "Painting",
        'keywords': [" 'Portrait','Pencil Drawing','Acrylic painting' "]   
      }
    ]
  }
