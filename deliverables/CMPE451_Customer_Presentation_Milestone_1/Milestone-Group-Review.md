## Group Review

### 1. Executive Summary

In this part, we will summarize the current status of the project for each team and we will mention about the changes that we planned for moving forward. Firstly, at the beginning of this semester we divided into three subgroups as frontend, backend and mobile. We revised the things we did in CMPE352 and reshaped our project plan according to our needs. Now, after our first customer presentation, we achieved some of our goals and presented it to our customers. Below, you can find the status of the project and changes in the plan for each subgroup.
    
* Frontend
* Backend

    Before the first customer presentation, the predefined tasks for backend team was
    - Dockerizing the app
    - Deploying the app
    - Writing code for sign-up
    - Writing code for login
    - Creating a connection with database

    The backend team has completed all these tasks and presented them in the customer presentation. About the changes that we planned for moving forward, we added a       new part for annotations in our project plan. We decided to show more focus on annotations.
    
* Mobile
    
    

### 2. List and status of deliverables.

|**Deliverable**|**Status**|
|---|---|
[Software Requirements Specification]()|Completed|
[Class Diagram]()|Completed|
[Use Case Diagram]()|Completed|
[Sequence Diagrams]()|Completed|
[Scenario & Mockup 1]()|Completed|
[Scenario & Mockup 2]()|Completed|
[Scenario & Mockup 3]()|Completed|
[Project Plan]()|Completed|
[Individual Contribution Reports]()|Completed|
[Customer Milestone 1 Group Review]()|Completed|

### 3. Evaluation of the status of deliverables and its impact on your project plan
### 4. Evaluation of tools and processes you have used to manage your team project.
    
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

### 5. The [requirements]() addressed in this milestone
### 6. Overall description of responsibilities that are assigned to each member.
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
 

### 7. A Summary of work performed by each team member (in tabular format).


   **İbrahim Buğra Elmas**
   
  |Issue Title|Link|
  |-----|:--------:|
  |[Mobile] - Login/Signup Pages Implementations|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/252)|
  |[Mobile] - Axios and Linking App with Backend |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/262)|
  |[Mobile] - Search Page Mockup|[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/283)|
  |Revising Sequence Diagrams |[Issue Link](https://github.com/bounswe/bounswe2022group9/issues/244)|
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
