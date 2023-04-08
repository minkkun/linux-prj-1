# Report, Linux Project 1 by Minh Hien Le
## Table of contents
- [Project Overview](#Project_Overview) 
- [Presentation](#Presentation)
- [Project Making](#Project_Making)
- [Code](#Code)
- [Fellow Student Critique](#Fellow_Student_Critique)


## Project_Overview
- This is a web to search for the details of every classes at Case that are listed at https://bulletin.case.edu/course-descriptions/. User needs to provide the class code.
- Demo: http://eecslab-22.case.edu/~mhl87/project1/public.html
<img src='https://i.imgur.com/WSwQEHo.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

## Presentation
- **Why?** I create this project because every time I want to look up a class to add to my shopping cart, I need to go to search for the catalog and have to go to a specific address for the subject to see all of the classes they offer, which is a hassle.  
- **For whom?** I think this is very beneficial for Case students, but beyond that, I have a lot of ideas that can make this a much more powerful app:
	- **What's next?** 
		- User can search by key word, and the result will return possible classes they are looking for. Another click / hover to see the class details.
		- A database of top 100 NUs classes. Anyone looking for university classes can go here and search for the class details.
		- Save the classes you like, calculate credits on plate.

## Project_Making
This session is dedicated to the process of making the app.
First I wget 'https://bulletin.case.edu/course-descriptions/' and then edit the html file so that it only contains the course links of the individual subjects left.
Then I use `grep` and some bash code to clear out the html code, only links left. I added `wget` and the address prefix https://bulletin.case.edu and basically everything to make it works, and then `source` to `wget` all of the subject links. This is the result in the directory after that.
<img src='https://i.imgur.com/QVkUUiJ.png'/>
Then I had to write a php code (exec.php) to only extract the data I need in every individual html files, which looks somewhat like this.

> ACCT 100. Foundations of Accounting I. 3 Units.
> 
> Accounting is the language of business and this course exposes
> students to that language. This course introduces students to the
> basic principles, objectives, terminology and role of financial,
> managerial, and tax accounting in business. This course is intended
> for both business and non-business majors. This is the first required
> accounting course for all business majors.
> 
> ACCT 106. ...
> ...

Basically what the `exec.php` does is that it extracts the content of specific divs, and a lot of editing and regex. The result is the `data` file with 4 columns: the class code, class title, class unit and class description. The delimiter for the columns is `tab`.
<img src='https://i.imgur.com/6bzT2I7.png'>  

Now I create my project file in `public_html`, consist of:
1. `public.html`: for the front-end
2. `server.php`: this handles scanning the data file, storing them into variables and finding if the user's search matches anything in the data.
3. `main.js`: handle the click events and transferring information to the server. After receving the information from `server.php`, it also changes the front-end to match wanted result.
4. `data.txt`: the file contains the data

Details of what each does will be shown in the code.

## Code
- Project Hierarchy
```
public_html/
├─ project1/
│  ├─ data.txt
│  ├─ public.html
│  ├─ main.js
│  ├─ server.php
│  ├─ ... (some other testing files)
```
- See the code of the project here: https://github.com/minkkun/linux-prj-1/

## Fellow_Student_Critique
- I did the feedback for Long Nguyen, @lhn15. His project: http://eecslab-22.case.edu/~lhn15/Prj1Linux/index.html
- I was very amazed by how many things you put into your project. The jokes are actually fun, though. Definitely a fun site for me with the use of API. Yet I feel like this project lacks originality as it basically extracts other websites into yours. I feel like this could be a much more powerful app if this can be a dashboard, with the to-do-list, the weather, calendar and everything. Something like this. The Notion dashboard is a very trendy things nowadays and your webapp has the potential of going big if there are more functionalities!
<img src='https://images.squarespace-cdn.com/content/v1/5a049a70be42d60e92dd8246/1618860571523-DJ13PONV3WXB1GBUD2AZ/aesthetic-notion-dashboards-14.png?format=1500w'>
 Somehow I just feel like this is a greater fit for the Web Dev class more than this class. Yet, overall, I feel like your project is a very fun one and I enjoy every parts of it.
