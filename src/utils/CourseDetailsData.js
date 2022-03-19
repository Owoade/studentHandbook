export const CourseDetailsData=[
    {
        dataHeading:"REGISTRATION FOR COURSES",
        list:{
            type:"alphabet"
        },
        data: [
            {
                text:"Each student must complete his/her registration for courses prescribed for each semester at a specified period on-line."
            },{
                text:"Registration period for stale students is two weeks and three weeks for fresh students from the resumption date."
            },{
                text:"Registration guidelines shall be distributed to students before registration begins."
            },{
                text:"Any late registration will attract a penalty fees as may be ordered by the College Management."
            },{
                text:"No student will be allowed to write any examination on any course for which he/she is not formally registered."
            }
        ]
    },{
        dataHeading:"SCHEDULE OF FEES",
        paragraph:true,
        data:"Students should pay all prescribed fees to any bank through Remita. After the payment, students should proceed to the college account unit for their receipt and clearance sheets which shall be used as requirement for continuation of their registration on-line."
    },{
        dataHeading:"STUDENTS REGISTRATION",
        list:{
            type:"alphabet"
        },
        data:[
            {
                text:"All newly admitted students shall register within the first 21 days of first semester or forfeit the offer of admission for that session."
            },{
                text:"All fresh students must undergo a week orientation programme.",
            },{
                text:"Only fully registered students shall be allowed to matriculate"
            },{
                text:"All fresh students must undergo a week orientation programme."
            },{
                text:"Every new student must matriculate. The matriculation confers Membership of the College Community on the student."
            },{
                text:"Every new student must be issued with identity card after matriculation."
            }
        ]
    },
    {
        dataHeading:"Student Industrial Work Experience (SIWES)",
        list:{
            type:"alphabet"
        },
        data:[
            {
                text:"SIWES is done at the end of second semester of the first year in ND programme for a period of 4 months."
            },{
                text:"Assessment of the student is done by both Industry Based Supervisor and the Institution Based Supervisor."
            },{
                text:"The SIWES carries 4 units in the course load."
            },{
                text:"At the end of the SIWES programme, students are expected to submit the following:",
                subList:{
                    type:"roman",
                    data:[
                        {
                            text:"SIWES log book"
                        },
                        {
                            text:"ITF form 8"
                        },{
                            text:"Field Assessment form"
                        },{
                            text:"Report"
                        }
                    ]
                }
            }
        ]
    },{
        dataHeading:"STUDENTS ASSESSMENT",
        
        list:{
            type:"multiple-components"
        },
        data:[
            { 
              subHeading:"Lecture/Practical Attendance",
              type:"list",
              breadCrumb:"Assessment of students’ work shall be based on:",
              desc:"alphabet",
              data:[
                  {
                      text:"A minimum of 75% and 80% attendance in both lecture and practical classes respectively as required for a candidate to be eligible to sit for any semester examination."
                  },{
                      text:"Attendance at both lecture and practical classes constitutes a particular percentage of the semester examination."
                  }
              ],
            },{
                subHeading:"Course Work/Assessment",
                desc:"alphabet",
                type:"list",
                data:[
                    {
                        text:"Semester Examination 60% "
                    },{
                        text:"ractical 30%"
                    },{
                        text:"Continues assessment, assignment, quizzes, term paper etc. 10%"
                    }

                ]
            },{
                subHeading:"Level of Performance",
                breadCrumb:"A candidate shall be recorded as having attained in a course a level of achievement graded as follows:",
                type:"table",
                 tableHeading:["Scores","Grade","Credit points","Remarks"],
                    tableBody:{
                        tableRows:[
                            ["75 – 100%","A","4.0","Pass"],
                            ["70 – 74%","AB","3.5","Pass"],
                            ["65 – 69%","B","3.25","Pass"],
                            ["60 - 64% ","BC","3.0","Pass"],
                            ["55 – 59%","C","2.75","Pass"],
                            ["50 – 54%","CD","2.50","Pass"],
                            ["45 – 49%","D","2.25","Pass"],
                            ["40 – 44%","E","2.0","Pass"],
                            ["Below 40%","F","0.0","Fail"]

                        ]
                    
                }
            },{
                subHeading:"Grade Point (GP)",
                paragraph:true,
                data:"A Grade Point is obtained by multiplying the credit unit assigned to a particular course by the credit points obtained in the examination of that course. Thus, if mathematic carries 2 credit units and a student scored 75% which is 4.0 credit points, his grade point for Mathematics is credit points x credit unit i.e. 4.0 x 3 = 12 points."
            },{
                subHeading:"For example:",
                type:"table",
                tableHeading:["Course","Credit Unit","Score(%)","Letter grade","Credit (CP)","Grade (GP)"],
                tableBody:{
                    tableRows:[
                        ["Mathematics","3","75","AB","3.5","10.5"],
                        ["Chemistry ","2","50","BC","2.5","5.0"],
                        ["Biology","3","64","B","3.0","9.0"],
                        ["Economics","2","75","C","2.0","4.0"],
                        ["","10","","","","28.5"],
                        ["","Total","Grade point","","=","28.5"],
                        ["","Total","Credit unit","","=","28.5"],
                        ["","Total","Grade point","","=","28.5/10"],
                        ["","","","","","2.85"],
                    ]
                }
            },{
                subHeading:"Cumulative Grade Point Average (CGPA)",
                paragraph:true,
                data:"The CGPA is used to determine the student’s up to date record of performance. This is obtained by dividing the total grade point (GP) of all courses registered to date by the total number of courses units registered to date in respect of all semesters.",            
            },{
                subHeading:"For example:",
                type:"list",
                list:{type:"multiple-components"},
                data:[{
                   subHeading:"1st Semester",
                   type:"list",
                   data:[
                       {
                           text:"Total Grade Point = 73.5"
                       },
                       {
                           text:"Total Credit Point = 21"
                       },
                       {
                           text:"Grade point Average = 73.5/21"
                       },
                       {
                           text:"(GPA) = 3.5"
                       }
                   ]
                },{
                    subHeading:"2nd Semester",
                    type:"list",
                    data:[
                        {
                            text:"Total Grade Point = 73.5"
                        },
                        {
                            text:"Total Credit Point = 21"
                        },
                        {
                            text:"Grade point Average = 73.5/21"
                        },
                        {
                            text:"(GPA) = 3.5"
                        },
                    ]
                },{
                    subHeading:"2nd Semester",
                    type:"list",
                    data:[
                        {
                            text:"Total Grade Point = 70"
                        },
                        {
                            text:"Total Credit Point = 19"
                        },
                        {
                            text:"Grade point Average = 70/19"
                        },
                        {
                            text:"(GPA) = 3.68"
                        },
                    ]
                },{
                    subHeading:"3rd semester",
                    type:"list",
                    data:[
                        {
                            text:"Total Grade PointCumulative Grade Point to date = 73.5 + 78.5 + 70 = 222 = 70"
                        },
                        {
                            text:"Cumulative Credit Point to date = 21 + 20 + 19 = 60"
                        },
                        {
                            text:"Cumulative Grade Point Average (CGPA)	= 222/60"
                        },
                        {
                            text:"(CGPA) = 3.70"
                        },
                    ]
                }
            ]
            },{
                subHeading:"Graduating Point Average (GPA)",
                paragraph:true,
                data:"National Diploma (ND) and Higher National Diploma (HND) last for 4 semesters. The fourth semester examination is the terminal diploma examination. This examination is externally moderated and carries the balance of 50%. The Graduating Point Average (GPA) is obtained by finding the average of the students CGPA over the past three semesters and the diploma terminal semester examination grade point. Thus, if the CGPA over the past three semesters is 3.70 and the diploma terminal semester examination grade point is 3.50, the students GPA is:3.70 + 3.502 = 3.60"
            },{  
                subHeading:"Diploma Shall be Classified as Follows:",
                type:"list",
                desc:"none",
                   data:[
                       {
                           text:"ND/HND Certificates Class of Diploma"
                       },
                       {
                           text:"Distinction: 3.5 – 4.0"
                       },
                       {
                           text:"Upper Credit: 3.0 – 3.49"
                       },
                       {
                           text:"Lower Credit: 2.5 – 2.99"
                       },
                       {
                           text:"Pass: 2.0 – 2.49"
                       },
                       {
                           text:"Fail: below 2.0 "
                       }
                    ]
            }
        ]
    },{
        dataHeading:"",
        
        list:{
            type:"multiple-components"
        },
        data:[
            {
                subHeading:"Requirements for the Award of National Diploma (ND) and Higher National Diploma (HND) Certificates:",
                type:"list",
                desc:"alphabet",
                data:[
                    {text:"To be eligible for the award of ND and HND Certificate, a candidate must satisfactorily complete the prescribed course work."},
                    {text:"Pass all examination"},
                    {text:"Successfully complete and submit Diploma Project work."},
                    {text:"Meet the requirement of SIWES"},
                    {text:"Meet the requirement of SIWES"},
                ]
            },{
                subHeading:"Teaching and Examination Time Table",
                type:"list",
                desc:"alphabet",
                data:[
                    {text:"At the beginning of each semester the teaching time table shall be made available to the students on the notice boards."},
                    {text:"Examination time table for all courses to be examined shall be released at least two weeks before the first day of the examination period."},
                    {text:"The time appointed for the examination as indicated in the examination time table or the question paper must be strictly adhered to."}
                ]
            },{
                subHeading:"Release of Examination Results",
                type:"list",
                desc:"alphabet",
                data:[
                    {text:"At the end of each semester a provisional list of successful candidates in examination shall be published by the Registrar of the College soon after ratification by the College Academic Board (CAB)."},
                    {text:"The final results of candidate for the award of National Diploma and Higher National Diploma shall be published by the Registrar of the College after they have been approved by the College Academic Board."},
                    {text:"The proceedings of College Academic Board and the marks awarded to any candidate for any question or any paper or examination are confidential and are in no circumstances to be disclosed at anytime to any candidate or to any other unauthorized person."}
                ]
            },{
                subHeading:"Procedure for Obtaining Academic Transcripts",
                type:"list",
                desc:"alphabet",
                data:[
                    {text:"Academic Transcript shall not be sent to any individual or to an employer but only to Institution of Higher learning or Scholarship Board on request."},
                    {text:"The final results of candidate for the award of National Diploma and Higher National Diploma shall be published by the Registrar of the College after they have been approved by the College Academic Board."},
                    {text:"Application for issuance of transcript stating the destination of the transcript shall be written through the Registrar to the Provost for approval."},
                    {text:"If the Provost approved the application the candidate will be asked to pay the transcript fee of ten thousand naira only (N10,000) if it is within Nigeria and ten thousand naira (N25,000) if it outside the country to the College Account and the sum for five thousand naira only (N5,000) to the Alumni Association Account."},
                    {text:"The approved application and the receipt (photocopies) attached will be sent to the relevant Department for locating of file and writing of results."},
                    {text:"The results written at the Departmental level will be verified by the relevant Departmental coordinator and counter signed by the Head of Department before dispatching the document to the Registrar’s office."},
                    {text:"The dispatched document will also be verified by the Administrative officer in charge of Academics in the Registrar’s office."},
                    {text:"The final copy of the produced transcript will be couriered, posted or hand delivered by the College staff to its destination and not by the student."},
                    {text:"The full name and address of the institution or scholarship board should be stated so that the College can send the transcript directly to the Institution/Scholarship board."},
                ]
            },{
                subHeading:"Procedure for Obtaining Academic Transcripts",
                paragraph:true,
                data:"A student who fails to reach a cumulative grade point average of 2.00 at the end of one semester shall be placed on Probation during the second semester. If he fails to achieve a cumulative grade point average of at least 2.00 at the end of the second semester, he/she shall be required to WITHDRAW from the College."
            },{
                subHeading:"Lapse of Studentship",
                paragraph:true,
                data:"Any student that fails to fully register for College Courses and fails to sit for College Examinations for two (2) consecutive academic sessions should consider his/her studentship to have lapsed. His/her studentship would be terminated and would no longer be attended to."
            },{
                subHeading:"Semester Examination",
                type:"list",
                desc:"alphabet",
                data:[
                    {text:"The semester examination in any of the courses shall be between 2 to 3 hours.                    "},
                    {text:"All aspects of the syllabus are to be covered by the questions.                    "},
                    {text:"In the case of a laboratory/workshop subject, a practical test shall be conducted which may vary from 2-6 hours in duration depending on the course."}
                ]
            },{
                subHeading:"Examination Guidelines",
                type:"list",
                desc:"alphabet",
                data:[
                    {text:"Examinations shall be held at the end of first and second semester for all courses offered in each semester."},
                    {text:"The dates of all semester examinations shall be fixed by the College Academic Board such dates shall be published in the College calendar and one published shall not be altered except with the express approval of the College Academic Board or the Provost."},
                ]
            }
            ,{
                subHeading:"Examination Accommodation",
                type:"list",
                desc:"alphabet",
                data:[
                    {text:"All College Examinations shall be a standardized and specific distance maintained between one candidate and other to prevent cheating.                    "},
                    {text:"The Registrar of the College or Examination Coordinator shall supply to the invigilator at each examination room the answer booklets and other approved materials necessary for the examination.                    "},
                ]
            },{
                subHeading:"Conduct of Examination",
                type:"list",
                desc:"alphabet",
                breadCrumb:"A student shall not qualify to take any semester examination until he/she has settled all his/her financial obligations to the College.",
                data:[
                    {text:"Every student should have at least 75% class attendance in each of the courses at the end of each semester. Any student whose class attendance falls below this requirement shall be prevented from sitting for the semester examination."},
                    {text:"No students will be allowed to write any examination on any course for which he/she has not formally registered."},
                    {text:"No candidate shall be allowed to enter the examination room later than ten minutes before the commencement of the examination or to leave an examination room earlier than thirty minutes after the commencement of an examination.                    "},
                    {text:"In case a candidate has to leave the examination room temporarily, he/she shall be accompanied by an attendant.                    "},
                    {text:"Every candidate must sign the attendance sheets in duplicate. These signed sheets shall be considered the final list of candidate in the examination.                    "},
                    {text:"No candidate should bring into the examination room any unauthorized materials or documents. An invigilator has authority to confiscate such materials and documents.                    "},
                    {text:"Students should come to the examination hall with their College Identity card and clearance paper."},
                    {text:"There should be no use of Handsets in the examination hall."},
                    {text:"ND I and ND II  and HND I and HND II examinations should not be held in the same hall at the same time."},
                    {text:"A candidate shall not leave examination room with any paper, used or unused except the question paper and such books and papers if any, as he or she is authorized to take into the examination room."},
                    {text:"A candidate shall comply with the instructions set out on a question paper answer booklet or any other materials supplied and shall also comply with any directive given by the invigilator."},
                    {text:"Until students are allowed to leave the examination room, no copy of any question paper shall be removed from the examination room.                    "},
                    {text:"Candidate shall not write on any paper other than the examination answer booklets and crossed out neatly. Supplementary answer-sheets even if they contain only rough work must be tied inside the main answer booklets"},
                    {text:"A candidate shall not be allowed during an examination to communicate by word or otherwise with any other candidate nor shall he or she leave his or her place except with the consent of an invigilator. Should a candidate act in such a way as to disturb or inconvenient other candidate(s) he or she shall be warned and if he or she persists he or she may, at the discretion of the invigilator, be excluded from the examination room.                    "},
                    {text:"Smoking shall not be allowed in examination room during examination sessions."},
                    {text:"It shall be an examination offence for any student or any person whatsoever, to impersonate a candidate in any examination. Any student or person found guilty under this regulation shall be subjected to disciplinary action by the appropriate authority of the College.                    "},
                    {text:"Any student caught cheating, aiding or abetting and found guilty would be EXPELLED from the College."},
                ]
            },{
                subHeading:"Absence from Examination.",
                type:"list",
                desc:"alphabet",
                breadCrumb:"A student shall not qualify to take any semester examination until he/she has settled all his/her financial obligations to the College.",
                data:[
                    {text:"Candidates must present themselves at College examination for which they have registered. Candidates who failed to do so for reason other than illness or accident shall be scored “OF” in the course(s)."},
                    {text:"A student who does not register for a repeat examination cannot write the examination for that course and would be awarded a grade of “OF”"},
                    {text:"Any candidate who, on account of illness or accident, is absent from a College examination may be permitted by the College Academy Board to present himself or herself for such examination at a time deemed convenient for College Academic Board provided he/she was reported the illness to the College Health Centre.                    "},
                    {text:"When a student falls ill before or during examination he/she should first report to the College Health Centre where possible. Report of sickness should be made to the Registrar within a week and medical certificate for validation of his illness within three weeks."},
                    {text:"A candidate who cannot register for courses during the prescribed period for registration because of an illness, must ensure that a medical report of his/her illness is forwarded by him/her, his/her or parents/sponsors to reach the Provost not later than two weeks after the end of the normal registration period as scheduled in the Academic Calendar.                    "},
                    {text:"No candidate should bring into the examination room any unauthorized materials or documents. An invigilator has authority to confiscate such materials and documents.                    "},
                    {text:"Students should come to the examination hall with their College Identity card and clearance paper."},
                    {text:"A candidate who applies for leave of absence on medical grounds must forward his/her application together with medical report to the Provost. The Medical report must be countersigned by the College Medical Officer.                    "},
                    {text:"ND I and ND II  and HND I and HND II examinations should not be held in the same hall at the same time."},
                    {text:"A candidate shall not leave examination room with any paper, used or unused except the question paper and such books and papers if any, as he or she is authorized to take into the examination room."}
                ]
            }
        ]
    }
]

