## Group Review

### 1. Executive Summary

In this part, we will summarize the current status of the project for each team and we will mention about the changes that we planned for moving forward. Firstly, at the beginning of this semester we divided into three subgroups as frontend, backend and mobile. We revised the things we did in CMPE352 and reshaped our project plan according to our needs. Now, after our first customer presentation, we achieved some of our goals and presented it to our customers. Below, you can find the status of the project and changes in the plan for each subgroup.
    
* Frontend 

    First of all, at the beginning of this project, we code about the connection and architecture part of this project which is front-end project. In the implementation phase, we use React. Moreover, Axios Library was used for the back-end API requests. 
This project manages the user states and tokens with Redux implementation. Moreover, URL routing architecture was implemented in this project. When we look at the types of URLs, there are two different types which are public and authorized. Authorized URLs are URLs which users cannot access them without the login step and also information checked by using Redux’s stages.
Moreover, we implemented some basic functionalities such as login, sign up, profile page, etc. We mentioned some of the properties of these functionalities below:
    - If not logged in before, the user can create a new account in our application.
    - If logged in, the user can log out of the application.
    - Navigation bar was implemented in our application for the user to navigate between different pages of this application.
* Backend

    Before the first customer presentation, the predefined tasks for backend team was
    - Dockerizing the app
    - Deploying the app
    - Writing code for sign-up
    - Writing code for login
    - Creating a connection with database

    The backend team has completed all these tasks and presented them in the customer presentation. About the changes that we planned for moving forward, we added a       new part for annotations in our project plan. We decided to show more focus on annotations.
    
* Mobile
    
    Until the first customer meeting, the taks expected of us
    - Creating login-in page
    - Creating sing-up page
    - Creating forget password page
    - Creating mock-up for profile page
    - Creating mock-up for search page
    - Creating mock-up for feed page
    
    The mobile team completed all the tasks. Our future plan is make changes on some futures in KVKK text and convert the mock up pages to a functional pages and link them to the backend end points.
    
    

### 2. List and Status of Deliverables

|**Deliverable**|**Status**|
|---|---|
[Requirement Analysis](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis)|Completed|
[Class Diagram](https://github.com/bounswe/bounswe2022group9/wiki/Class-Diagram)|Completed|
[Use Case Diagram](https://github.com/bounswe/bounswe2022group9/wiki/Use-Case-Diagram)|Completed|
[Sequence Diagrams](https://github.com/bounswe/bounswe2022group9/wiki/Sequence-Diagrams)|Completed|
[Scenario & Mockup 1](https://github.com/bounswe/bounswe2022group9/wiki/%22Sharing-an-art%22)|Completed|
[Scenario & Mockup 2](https://github.com/bounswe/bounswe2022group9/wiki/Following-a-User)|Completed|
[Scenario & Mockup 3](https://github.com/bounswe/bounswe2022group9/wiki/%22Commenting-on-content%22-scenario)|Completed|
[Project Plan](https://github.com/bounswe/bounswe2022group9/wiki/Project-Plan)|Completed|
[Individual Contribution Reports](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1/Deliverables.md#individual-contribution-reports)|Completed|
[Customer Milestone 1 Group Review](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1/Milestone-Group-Review.md)|Completed|


### 3. Evaluation of the status of deliverables and its impact on your project plan
#### 3.1 Software
##### 3.1.1 Backend

As backend team, we coded and tested 2 functionalities. These are:

* Signup (register)
* Login
        
These 2 functionalities are working as expected.
    
Our backend API has been Dockerized and deployed to AWS. Deployed API links are:

* Signup API endpoint (accepts POST request): http://ec2-44-202-130-117.compute-1.amazonaws.com/user/signup
* Login API endpoint (accepts POST request): http://ec2-44-202-130-117.compute-1.amazonaws.com/user/login
        
And our [API documentation can be reached from here](https://github.com/bounswe/bounswe2022group9/wiki/API-Documentation)


When our project plan is checked, it can be seen that we succesfully complied with our project plan and we plan to continue successfully tracking project plan during the course.
##### 3.1.2 Mobile

As mobile team, we proceeded in line with the endpoints given to us by the backend and the project plan and we reached the point we wanted. There were two functions that we connected in the backend, one of them is signup and the other is login. In addition, we have prepared mock feed search and profile pages in order to set an example at the customer meeting and to make the customer feel our main purpose. We put random artistic paintings in the feed, we prepared the words picasso and renaissance in the search section, and finally, we put 5 posts as examples of the person's own uploads on the profile page.

##### 3.1.3 Frontend

We developed 3 web pages which are:

    * Sign up page

    * Login page

    * Profile page (Static)

As stated in our project plan, we completed sign up and login features and designed the profile page in time. We have basic controls over frontend such as minimum number of characters on username while signing up.

Our [Login Page can be reached here](http://react-app-group-9.s3-website.eu-central-1.amazonaws.com/login). 

#### 3.2 Software Design (UML Diagrams)

There are 3 types of UML diagrams, we prepared use case, sequence and class diagrams. They were first prepared during CmpE 352, in this semester they are reviewed and revised.

**Use Case diagrams** helps customers and developers to understand how users, software and external sources are interacting each other while the software is being used.

**Sequence diagrams** shows in how subsystems, modules and services in the code are being interacted with user in which cases, they also show which functions are called during these interactions and what are responses. One of the numerous benefits of sequence diagrams is, they help communication of developers coding different modules.

While we were deciding what endpoints we need to implement, one of the places we looked was our use case and sequence diagrams pages, since they are also showing users' interaction with the system, and all places user interacts is an endpoint. These diagrams also used to decide possible request reponse pairs.

**Class Diagrams** shows classes, functions, variables, their acces modifiers in the code. Preparing a class diagram before coding, helps developers to have a better design.They also help us to find out largeness/hardness of classes/functionalities . While we are developing our project plan, it's an information used frequently.

One of the most important steps of preparing the project plan was deciding some parameters including : what are the tasks, what are prerequisite relationships between tasks(e.g., sign up functionality is a prerequisite for login functionality, while database configuration is a prerequisite for both them). These diagrams also helped us to determine these parameters. As a result, UML diagrams are used while project plan is being prepared.

#### 3.3 Individual Contributions Reports

Individual contributions reports are showing contributions, responsibilities, code-related and management-related significant issues and pull requests of each developer in the group. Every single member of the group is preparing their own Individual Contributions Reports.


#### 3.4 Project Plan

Project plan is one of the most important components of a project. To prepare a project plan, we first decided what are the tasks in this project and then we decided  how much time each seperate tasks requires. We carefully considered prerequisite relationships of the tasks (e.g., sign up functionality is a prerequisite for login functionality, while database configuration is a prerequisite for both them). There is a famous saying, "If you place the first button of a shirt wrong, then all remaining buttons will be placed wrong." We decided the order and start-end times of the jobs according the time consumption of the jobs, our groups internal dynamics,  milestone deadlines and prerequisite relationships of the jobs.

To prepare our project plan, we have used an open-source project planning tool named Project Libre.

When the current version of the software and the project plan is compared, it can be easily seen that we are tracking the project plan successfully.

#### 3.5 Software Requirements Specification

Our [Software Requirements Specification](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis) state that our project has to obey those specification, so our software also provide them. As written [here](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis#314-profile), one can easily see that all of our sub-teams work to meet these requirements. For example on mobile, profile page shows user's own art items, his/her profile picture, etc. In conclusion, we stay in the borders that we had drawn.

#### 3.6 Scenarios and mockups

As a team, we are trying to stay in our [Project Plan](https://github.com/bounswe/bounswe2022group9/wiki/Project-Plan). Meanwhile, we consider to develop our software to be relevant to the designs that we have already done as in our Scenarios and Mockups. All the scenarios are actually ahead of our project plan now, but we develop our project to be related to the scenarios. In the frontend, for example, while we were designing the web pages, we based on the mockups.

#### 3.7 Milestone 1 Group Review

At the end of this Milestone, we collaboratively created a general [Review](https://github.com/bounswe/bounswe2022group9/blob/master/deliverables/CMPE451_Customer_Presentation_Milestone_1/Milestone-Group-Review.md) of our project. This review is also a good way of seeing what we have accomplished so far and what needs to be focused from now on. 

### 4. Evaluation of Tools and Processes
    
    i) Meeting formats: every wednesday @22.00 @Discord
    
    ii) Communication channels: whatsapp for instant comms., discord for weekly meetings and general discussions and information 
    
    iii) Managing project: Github for PRs and peer reviews
    
  * Frontend
    - React: It is the most common framework for web application development. Therefore we choose to implement this framework. It has lots of tutorials and documents for using complex implementations. Also, someone who doesn't know React can fastly adapt to coding with React because of javascript usage.
    - Axios: Axios library handles various API requests. For API requests, we use Axios too. In the React applications, the program sends POST or GET requests to the backend and the response message will be waited. The backend group has implemented documentation for API responses, and the program processes the response using this API documentation.
    - Antd: The second popular UI library for React applications. Every member in the frontend group can smoothly start using this library. The components of our project have detailed features and the library gives us control of complex components. Therefore we can use every detail by applying minor changes in the code.
    - Visual Studio Code: We choose this program for a common coding platform. It's easy to use and has a lite program so everyone can handle it on every device.
    
  * Mobile
    - React Native: It is a very straightforward tool to getting started with mobile application development. We read its docs and watched some tutorials to get started. React native is still in a beta version, currently in 0.70, there is a lot of things to do make it a complete product but, this for course and for our application, after we analyzed the requirements, we decided that current situation of React Native is sufficient for us. So we chose React Native as our main development tool.
    - Expo: It is nearly nested with React Native. Actually, when you read React Native’s docs, it recommends using Expo. Main focus of Expo is easing the development process of react native apps. We used Expo to make our app ready and running while we write code. It enables you to see real time code changes in the simulator. Also, making APK releases with Expo is just a single line code, so we integrated it with our. Project.
    - Android Studio: We use this program to only use emulators built within it. So that when we run our code we can see what we are doing.
   
   * Backend
     - Python Django Framework: Python is one of the most easy-to-use programming languages, thus we think that it will be much more comfortable to adapt ourself to the project if we use Python. Therefore, we decided to use Python as the backend language. On the other hand, since we used Django framework in Cmpe352 project, we are used to use django framework. Furthermore, in Django, there are certain structures that makes programming easy. Therefore, we used python django framework in the backend part.
     - Visual Studio Code/Pycharm: These are the Internal Development Environments that we use to write our code.
     - Docker: It would be very nice to run a program in localhost. However, we can not give our computer to the customer.Therefore, we need to deploy our product to a cloud platform. In order to deploy our program, we need OS-level virtualization and therefore we used Docker for this purpose.
     - AWS: This is the cloud platform that we used to deploy our program. 
     - PostgreSQL: In this project, we used postgresql as a database system. Data is sent from frontend to the backend and we need to store our data. This is the place where we store the data.

### 5. The [Requirements](https://github.com/bounswe/bounswe2022group9/wiki/Requirement-Analysis) Addressed in Milestone
* **3.1.1.1.** Guest users shall be able to sign up to the platform with their name, their email account, a username and password.
* **3.1.1.2.** Users should be able to delete their platform accounts.
* **3.1.1.3.** Guest users should have access only to registration and login pages.
* **3.1.1.4.** User password should be at least 8 characters long should contain at least one uppercase, one lowercase and one symbol.
* **3.1.2.** Login
* **3.1.2.1.** Users shall be able to log in with their username and their password.
* **3.1.2.2.** Users shall be able to log out.
* **3.1.2.3.** Users shall be able to change their password if they are logged out. In this case, a confirmation mail will go to their email boxes.
* **3.1.2.4.** Users shall be able to change their username and passwords later after logging in.

* **4.2.1.** Any user input that is designed to attack the site shall be detected and prevented.
* **4.2.2.** User data shall be kept safe from possible attacks via encryption algorithms such as AES-256. All of these data should be encrypted in the database.
* **4.2.3.** User passwords shall contain at least one uppercase letter, one lowercase letter, and one number in order to make brute force algorithms harder to succeed.
* **4.2.4.** User passwords shall contain at least eight characters.
### 6. Overall Description of Responsibilities
  * Yağmur Göktaş
     - I found resources to get into React Native and implemented an internal daily training.
     -  the signup page in user interface
     -  a mock profile page to show an example in Customer Milestone
     -  the backend link of the login page

  * İbrahim Buğra Elmas
      - Creating a scheme for our mobile application and adding it to our repo. 
      - Main tasks until Customer Meeting 1 were adding login page, linking sign up feature of app with backend endpoint and creating a mockup for search page. 
      - Additionally, since added to this group this semester, some of responsibilities were understanding project and creating personal wiki page. taking notes in some meetings and revising PRs of subgroup friends. 
      - Revising sequence diagrams from last semester.
  * Ufuk Karagöz
      - I created my personal pages as a new group member.
      - I updated the Readme file and project plan. The updated project plan file and Screen Shots were added to the wiki page. 
      - I was assigned to the frontend subgroup and the coding part was implemented. I primarily code about the connection and architecture part of the front-end project. We chose to React for the frontend implementation. 
      - I used the Axios library for the backend API requests. The project manages the user states and tokens with Redux implementation. 
      - URL routing architecture was implemented. There are two different types of URLs such as public and authorized. Users cannot access authorized URLs without the login step and the information checked by using Redux's states.
     
   * Burak Ferit Aktan
     - I opened a Discord server to help team communication. Team meetings are done on this Discord server. I opened seperate text and voice channels for general usage, backend, frontend and mobile teams.
     - I reviewed and revised Use Case Diagrams. 
     - I'm a member of backend group, this brings me responsibility of writing and testing backend code.
          - I wrote backend codes for signup.
          - I wrote tests for signup.
          - I was note taker of first backend meeting. I documented first backend meeting's notes.
     - I am also working for API documentation (signup part). In these documentations, I'm telling "how to send requests to API endpoints, what are possible API responses and which type of responses are given in which kinds of requests" These documentations are important for both customers and team communication.
      - I worked on scenario preparation for Milestone 1. I created a "sign up scenario" to present with Ömer Faruk Şişman on Customer Meeting (Milestone).
      - I wrote sections 3.1.1, 3.2, 3.3, 3.4 in the Milestone Group Review
 
  * Oğuzhan Özboyacı
      - I created my personale Wiki page because I am new member. Understanding the project is another reponsibilty for me.
      - I reviewed the Scenarios and MockUps from the last semester.
      - I am mobile subgroup member. I created forget password page and feed mockup page.
      - I reviewed my subgroup friend's PRs.

  * Ömer Faruk Şişman
     - I have updated README and my personal wiki page.
     - I have updated weekly efforts page and wiki sidebar.
     - I'm a member of backend group, this brings me responsibility of writing and testing backend code.
     	  - I have created EC2 instance on AWS.
     	  - I have initialized Django project.
     	  - I have made connection between backend app and database.
     	  - I have dockerized Django app and database.
          - I have written backend codes for login.
          - I have written tests for login.
          - I have deployed login and singup.
     - I have worked on scenario preparation for Milestone 1. I created a "sign up scenario" to present with Burak Ferit Aktan on Customer Meeting (Milestone).
     - I have created and filled report for Milestone 1 Deliverables.
     - I have added "requirements addressed" and "status of deliverables" parts to Milestone 1 Group Review.
    
  * Berkkant Koç
     - I have updated my personal wiki page.
     - I am a member of backend part of the application.
        - I have prepared my local desktop to develop the project
        - I have reviewed old projects for login authentication.
        - I have collaborated with my teammate to create login page.
     - I have taken the notes in the group presentation of Milestone 1.
     - I have created my personel effort page for Milestone 1.
     - I have created "Evaluation of tools" part of the Milestone 1.
      
   * Furkan Özdemir
     - I revised software requirements.
     - I joined all meetings that I should join.
     - I made a research about dockerize & deploying django apps.
     - I created a dockerfile.
     - I worked on API documentation and wrote login part.
     - I reviewed a pull request about backend code of login page.
     - I reviewed a pull request about frontend code.
     - I created an installation and running guide for backend.
     - I documented one of the meeting notes.
     - I wrote backend part of the executive summary and filled parts related to personal effort.
     
   * Kutay Saran
     - I am a member of frontend part of application.
     - I researched on react and ant design.
     - I researched on old projects for profile and login pages.
     - I revised communication plan.
     - I have written frontend codes for login and profile pages.
     - I have created my personal effort page for Milestone 1.
     - I have created "Executive Summary" part of the  Milestone 1 for frontend.

   * Hüseyin Türker Erdem
     - I researched on react and ant design.
     - I have added sections 3.1.3, 3.5, 3.6 and 3.7 to Milestone 1 Group Review.


### 7. A Summary of Work Performed by Each Team Member 
    
   **Yağmur Göktaş**
   
   |Issue Title|Link|
  |-----|:--------:|
  |[Mobile] - Terms and Privacy Policy|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/266)|
  |[Mobile] - Profile Page |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/276)|
  |[Mobile] - Backend Connection for Login|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/284)|
  |[Mobile] -On the profile page, the images are disorganized according to the screen size|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/297)|
  |[Mobile] - Application name should be added to Terms and Privacy Policy|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/295)|
  |[Mobile] - Mock Art Image Collection|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/285)|
  |[Mobile] - Post number is wrong|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/299)|
  |[Mobile] - Determining background, primary and secondary colors for mobile application |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/256)|
  
    
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Mobil] Feature/signup|[#265](https://github.com/bounswe/bounswe2022group9/pull/265)|
  |[Mobil] Feature/privacy policy|[#275](https://github.com/bounswe/bounswe2022group9/pull/275)|
  |[Mobile] Feature/mock profile|[#286](https://github.com/bounswe/bounswe2022group9/pull/286)|
  |[Mobile] Feature/login backend|[#287](https://github.com/bounswe/bounswe2022group9/pull/287)|
  |[Mobile] App name added to Terms and Privacy text|[#296](https://github.com/bounswe/bounswe2022group9/pull/296)|
  |[Mobile] Bugfix/image size|[#298](https://github.com/bounswe/bounswe2022group9/pull/298)|
  |[Mobile] Post number is corrected|[#300](https://github.com/bounswe/bounswe2022group9/pull/300)|
  
   **İbrahim Buğra Elmas**
   
  |Issue Title|Link|
  |-----|:--------:|
  |[Mobile] - Login/Signup Pages Implementations|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/252)|
  |[Mobile] - Axios and Linking App with Backend |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/262)|
  |[Mobile] - Search Page Mockup|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/283)|
  |Revising Sequence Diagrams |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/244)|
  |[Mobile] - Determining background, primary and secondary colors for mobile application|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/256)|
  |Adding Meeting Notes (9/10/2022)|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/234)|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |mobile initial commit|[#255](https://github.com/bounswe/bounswe2022group9/pull/255)|
  |[Mobile] - add constant colors|[#261](https://github.com/bounswe/bounswe2022group9/pull/261)|
  |signup backend connection|[#281](https://github.com/bounswe/bounswe2022group9/pull/281)|
  |[Mobil] - search mockup|[#293](https://github.com/bounswe/bounswe2022group9/pull/293)|
  
  
   **Ufuk Karagöz**
   
  |Issue Title|Link|
  |-----|:--------:|
  |[Frontend] - Sign up/Password Reset Pages Implementations|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/253)|
  |[Frontend] - Axios and Routing Implementations|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/254)|
  |Updating README Page |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/239)|
  |Creating Project Plan on ProjectLibre |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/249)|
  |Frontend Meeting Notes #1|[Issue Link](https://github.com/bounswe/bounswe2022group9/wiki/Frontend-Meeting-Notes-1)|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |initial react files|[#258](https://github.com/bounswe/bounswe2022group9/pull/258)|
  |[Frontend] - Axios, Rounting and Login & Sign up pages|[#292](https://github.com/bounswe/bounswe2022group9/pull/292)|
  
   **Burak Ferit Aktan**
     
  |Issue Title|Link|
  |-----|:--------:|
  |Open a discord server for CmpE451| [Issue Link](https://github.com/bounswe/bounswe2022group9/issues/233)|
  |Use Case Revision|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/236)|
  |Updating Burak Ferit Aktan's personal wiki page|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/235)|
  |[Backend] Implement Signup Feature|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/251)|
  |[Backend] Write Unit Tests for Signup|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/277)|
  |Open a Wiki Page for API documentation|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/278)|
  |Document Signup endpoint of API|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/279)|
  |[Backend] Add Backend Meeting 1 Notes to Wiki|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/282)|
  |[Milestone] Creating frontend scenario for signup|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/290)|
  |[Milestone] Write Individual Contributions Report for Burak Ferit Aktan|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/309)|
  |[Milestone] Add project plan link to the Deliverables|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/311)|
  |[Milestone] "Evaluation of the status of deliverables and its impact on your project plan" part of Group Review|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/319)|
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Backend] Signup(register)|[#259](https://github.com/bounswe/bounswe2022group9/pull/259)|
  
  **Oğuzhan Özboyacı**
   
  |Issue Title|Link|
  |-----|:--------:|
  |Scenarios and Mockups Revision|[#245](https://github.com/bounswe/bounswe2022group9/issues/245)|
  |[Mobile] - Determining background, primary and secondary colors for mobile application]|[#256](https://github.com/bounswe/bounswe2022group9/issues/256)|
  |[Mobile] - Login/Signup Pages Implementations] |[#252](https://github.com/bounswe/bounswe2022group9/issues/252)|
  |[Mobile] Feed Page MockUp] |[#303](https://github.com/bounswe/bounswe2022group9/issues/303)|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Mobile]ForgetPassword page]|[#260](https://github.com/bounswe/bounswe2022group9/pull/260)|
  |[Mobile] feed page mockup]|[#301](https://github.com/bounswe/bounswe2022group9/pull/301)|
  
  **Ömer Faruk Şişman**
   
  |Issue Title|Link|
  |-----|:--------:|
  |Updating Ömer Faruk Şişman's Personal Wiki Page|[#240](https://github.com/bounswe/bounswe2022group9/issues/240)|
  |Updating Weekly Efforts Page|[#241](https://github.com/bounswe/bounswe2022group9/issues/241)|
  |Updating Wiki Sidebar|[#242](https://github.com/bounswe/bounswe2022group9/issues/242)|
  |Updating "Login" and "Follow" Use-Case Diagrams|[#243](https://github.com/bounswe/bounswe2022group9/issues/243)|
  |[Backend] Research on CI/CD process and AWS products.|[#267](https://github.com/bounswe/bounswe2022group9/issues/267)|  
  |[Backend] Creating AWS free-tier account and ECR for docker images.|[#268](https://github.com/bounswe/bounswe2022group9/issues/268)|
  |[Backend] Initializing the backend app. |[#269](https://github.com/bounswe/bounswe2022group9/issues/269)|
  |[Backend] Dockerizing the backend app.|[#270](https://github.com/bounswe/bounswe2022group9/issues/270)|
  |[Backend] Creating EC2 instance for deployment.|[#271](https://github.com/bounswe/bounswe2022group9/issues/271)|
  |[Backend] Deploying the signup endpoint.|[#272](https://github.com/bounswe/bounswe2022group9/issues/272)|
  |[Backend] Implementing the login endpoint.|[#273](https://github.com/bounswe/bounswe2022group9/issues/273)|
  |[Backend] Deploying the login endpoint.|[#274](https://github.com/bounswe/bounswe2022group9/issues/274)|
  |[Milestone] Creating Pre-Release version of project|[#288](https://github.com/bounswe/bounswe2022group9/issues/288)|
  |[Milestone] Creating report for deliverables.|[#289](https://github.com/bounswe/bounswe2022group9/issues/289)|
  |[Milestone] Creating frontend scenario for signup|[#290](https://github.com/bounswe/bounswe2022group9/issues/290)|
  |[Backend] CORS error on server side|[#294](https://github.com/bounswe/bounswe2022group9/issues/294)|
  |[Milestone] Adding "Status of Deliverables" part to Milestone 1 Group Review|[#320](https://github.com/bounswe/bounswe2022group9/issues/320)|
  |[Milestone] Adding "Addressed Requirements" part to Milestone 1 Report|[#321](https://github.com/bounswe/bounswe2022group9/issues/321)|
  |[Milestone] Creating individual contributions report for Ömer Faruk Şişman|[#322](https://github.com/bounswe/bounswe2022group9/issues/322)|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Backend] Login|[#280](https://github.com/bounswe/bounswe2022group9/pull/280)|
  |[Backend] Signup --reviewed|[#259](https://github.com/bounswe/bounswe2022group9/pull/259)|
  
  **Berkkant Koç**
  
  |Issue Title|Link|
  |-----|:--------:|
  |Create "Evaluation of Tools" part of the Milestone 1 |[#316](https://github.com/bounswe/bounswe2022group9/issues/316)|
  |[Milestone] Creating personal report for milestone|[#310](https://github.com/bounswe/bounswe2022group9/issues/310)|
  |[Backend] Implementing the login endpoint|[#273](https://github.com/bounswe/bounswe2022group9/issues/273)|
  |[Backend] Implement Login Feature|[#264](https://github.com/bounswe/bounswe2022group9/issues/264)|
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Backend] Login|[#280](https://github.com/bounswe/bounswe2022group9/pull/280)|
  
  
   **Furkan Özdemir**
   
  |Issue Title|Link|
  |-----|:--------:|
  |[Backend] Review Login Pull Request|[#304](https://github.com/bounswe/bounswe2022group9/issues/304)|
  |[Frontend] Review for Axios and Routing Pull Request|[#305](https://github.com/bounswe/bounswe2022group9/issues/305)|
  |Research on Dockerization|[#302](https://github.com/bounswe/bounswe2022group9/issues/302)|
  |Revising Requirements|[#248](https://github.com/bounswe/bounswe2022group9/issues/248)|
  |API Documentation (login)|[#307](https://github.com/bounswe/bounswe2022group9/issues/307)|  
  |Creating an installation guide for backend|[#306](https://github.com/bounswe/bounswe2022group9/issues/306)|
  |Creating pre-release version of project|[#288](https://github.com/bounswe/bounswe2022group9/issues/288)|
  |[Milestone] Writing Executive Summary of Milestone Group Review|[#312](https://github.com/bounswe/bounswe2022group9/issues/312)|
  |Documenting Meeting Notes|[#313](https://github.com/bounswe/bounswe2022group9/issues/313)|
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Backend] Login --reviewed|[#280](https://github.com/bounswe/bounswe2022group9/pull/280)|
  |[Frontend] Axios and Routing -- reviewed|[#292](https://github.com/bounswe/bounswe2022group9/pull/292)|
  
**Kutay Saran**
   
  |Issue Title|Link|
  |-----|:--------:|
  |Communication Plan Revision|[#246](https://github.com/bounswe/bounswe2022group9/issues/246)|
  |[Frontend] - Login/Profile Reset Pages Implementations|[#257](https://github.com/bounswe/bounswe2022group9/issues/257)|
  |[Milestone] "Executive Summary" part of Milestone report for front-end |[#318](https://github.com/bounswe/bounswe2022group9/issues/318)|
  
  
  |Pull Request Title|Link|
  |-----|:--------:|
  |[Frontend] Axios and Routing -- reviewed|[#292](https://github.com/bounswe/bounswe2022group9/pull/292)|
  
**Hüseyin Türker Erdem**
   
  |Issue Title|Link|
  |-----|:--------:|
  |[Milestone] "Evaluation of the status of deliverables and its impact on your project plan" part of Group Review|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/319)|
