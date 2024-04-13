
# Wiki Age Report

(This is a fork of jeffpriz/ado-wiki-age-report. I wanted to add something, but that repository wasn't being maintained. )

Keeping documentation in your Azure DevOps Wiki is a great way to keep it at the fingertips of the people already using Azure DevOps.
But have you ever had a new team member join, and you give him a link to your wiki to get up to speed, only to realize that the wiki is embarassingly out of date to the point that it wastes more of the new persons' time than not having a wiki at all? 
This extension tries to help you stay on top of that problem by giving you a report of the age of your wiki pages.
This will allow you to then keep an eye on the potentially stale documentation, and hopefully give everybody a better wiki experience!

The rows that have been identified as "old" also will allow the user to create a User Story/Product Backlog Item/Requirement (based on the process template your project is running) so that you can schedule work to review and update the outdated documents.

Enjoy!

## Team Filter
There is a dropdown labelled "Team Filter" which actually filters the wiki page path. So the assumption is that each team name is in all of that team's wiki pages paths, presumably as a folder name. If this is an invalid assumption, then you won't get much use out of the filter. Or I might implement filtering by free text.

## Images
Find the report next to the link to your Wiki

![Screen Shot](images/sideNav.PNG)

![Screen Shot](images/screenshot1.PNG)

## Credits
Most credits go to [Jeff Przylucki](http://www.oneluckidev.com)
Paul Abrams added the team filter.
