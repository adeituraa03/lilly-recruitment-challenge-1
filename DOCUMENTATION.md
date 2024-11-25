# Lilly Technical Challenge Documentation Template

*This documentation template serves as a place for you to discuss how you approached this challenge, any issues you faced & how you overcame them, or any other points that you feel would be relevant for the interviewers to know. The text in italics is here to guide you - feel free to remove it once you fill out each section!*

***Not every section in this document is required. This is just a template to help get you started. Feel free to add or remove sections as you feel necessary.***

## Approach
*How did you approach this challenge? Did you work through the objectives in any particular order? If so, why? Did you utilize any external resources, such as tutorials, guides, or other materials?*
- I went through this challenge in order, I started with the first objective to get data from the backend and send it to the front end.
  - I have not had any previous experience using an API so I was unsure on how to start
  - I looked at some websites to help me to understand how this system could work through examples
    - https://www.geeksforgeeks.org/how-to-connect-front-end-and-backend/
    - https://www.geeksforgeeks.org/how-to-use-the-javascript-fetch-api-to-get-data/
    - 
  - Additionally, I used ChatGPT to give me a simple example of how a backend and frontend system is connected and how I could apply this to the challenge ahead
  - After looking at examples from the internet I was able to write some code to retrieve data from the backend
  - I planned to have a input box where the user can enter the name of the medicine that they wanted and if the medicine name is found, it will return the name and its price.
    - Before getting this to work, I encountered a problem where the system could not read the variable 'data' (which contained the information from the dictionary)
    - I ended up solving this issue by changing the quotation marks I was using in the fetch command. '' - these were causing the issue so I changed them to `` which solved the problem.
- **Task 2**: deal with situations where the data is null
  - while completing task 1, I unintentionally solved this task at the same time, I included an exception handling section that would deal with any missing data by returning it to the front end as null showing that there was no information for it
- **Task 3**: allowing the user to input data from the frontend to the backend
  - My plan for this task was to do something similar to task 1, I copied the code from task 1 and adjusted the HTTP method to allow for a POST command rather than GET.
  - This did not work, so I tried to find some information on how a POST method should run and the websites were giving me information that I already knew
    - https://www.w3schools.com/tags/ref_httpmethods.asp
  - In the end, I put the error I was getting into ChatGPT and it was able to explain that the data I was trying to send from the frontend was in the wrong format and would not be accepted by the server.
  - I was converting the data into JSON format which is only useful for the frontend, I then changed it to URL Encoded format as suggested by ChatGPT.
  - Another issue I had was trying to do exception handling on the user input. For this page the user could enter a name for a new medicine and its price.
  - I wanted to ensure that the medicine name could only be string and the price could only be a number (int or float)
  - I used some websites to help me:
    - https://www.programiz.com/javascript/examples/float-or-integer
    - https://www.geeksforgeeks.org/check-if-a-variable-is-a-string-using-javascript/
  - However, I unable to get this to work for the medicine name, but it was working for the price as the server would not accept anything other than an integer for the price.
 
**Evaluation**
- Overall, I enjoyed this challenge since it gave me a better idea of the types of systems that I could be working on in industry.
- If I had more time, I would have developed the UI to make it more visually appealing and work on the exception handling for the input of data.
