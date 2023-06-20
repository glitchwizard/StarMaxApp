# StarMax
#### A used starship dealership website

## Description
This is a website for a used starship dealership. It allows users to view the current inventory, add new ships to the inventory, and edit or delete existing ships. It also allows users to view the details of each ship, including the ship's name, manufacturer, model, price, and description.

## Required Technologies
* [.NET SDK 7.0](https://dotnet.microsoft.com/download/dotnet/7.0).
* [Docker Desktop](https://www.docker.com/products/docker-desktop/)
* [`make`](https://www.gnu.org/software/make/) 
	- [Some ways to get make](https://stackoverflow.com/a/32127632/9265735)
* [Node.js](https://nodejs.org/en/)
* [`npm`](https://www.npmjs.com/)
* [Entity Framework Core CLI](https://learn.microsoft.com/en-us/ef/core/cli/dotnet)

## Suggested Technologies
* Visual Studio 2022 - makes it easier to run after cloning
* [SQL Server Management Studio](https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-ver15) (optional)

## Setup/Installation Requirements with all tech, suggested and required
1. Clone this repository to your desktop		
2. Navigate to StarMaxApp folder after 
3. run `make init` 
4. Visual Studio (NOT VS Code!) should open at the end of the the init sequence
5. Click the dropdown on the Start button in Visual Studio and select `Configure Startup Projects`

![Alt text](https://imgur.com/a/rZBZP1F)

6. Select `Multiple startup projects:` and set the action to `Start` for both.

![Alt text](https://imgur.com/a/UbqzUYM)

7. Click `Apply`, then `OK`, closing the dialog box.

## Setup/Installation Requirements the manual way

1. Clone this repository to your desktop
2. Navigate to StarMaxApp folder
3. Run `docker-compose up -d db` to start the MSSQL DB
4. Navigate to `StarMax_BackEnd` and run `dotnet restore`
5. Navigate to `StarMax_FrontEnd` and run `npm install`
6. Navigate back to `StarMax_BackEnd` and run `dotnet dotnet-ef database update`
	- if you have Entity Framework Core CLI installed globally, you can run `dotnet ef database update`
7. If you have Visual Studio, follow steps 5, 6 and 7 in the section above to set the `Startup` config

## Running the app

### With Makefile and Visual Studio IDE
1. Navigate to the project root folder `StarMaxApp` and open `StarMaxApp.sln`
2. Press the `Start` button at the top of Visual Studio and happy starshipping!

### The Manual Way
1. Navigate to the project root folder `StarMaxApp`
2. Verify the MSSQL docker container is up and running, if not run `docker-compose up -d db`
3. You'll need two terminals open
4. In the first terminal, navigate to `StarMax_BackEnd` and run `dotnet run`. This starts the API.
	- *Note*: You'll need internet because the back end makes a call to `swapi.dev` to get the starship list and seed the database. 
5. In the second terminal, navigate to `StarMax_FrontEnd` and run `npm start`. This will start the front end.

## Known Bugs
* No known bugs at this time
* Please contact me if you find any bugs or have suggestions
* Contact me at: glitchwizard@gmail.com

## Technologies Used
* C#
* ASP.NET Core MVC
* Entity Framework Core
* MSSQL
* HTML
* CSS
* Bootstrap
* JavaScript
* React

## License
* This project is licensed under the MIT License
* &copy; 2023 Charley McGowan

## Contact Information
Charley McGowan
glitchwizard@gmail.com
