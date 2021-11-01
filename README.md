# ATC Membership (Beta version)

![Demo Version](/src/images/demo.gif)

_<p align="center"> Note: The purpose of this project is a case study - No purpose in mimicking brands </p>_

ATC Membership is a beta platform which use to keep contact in Advance Technology Center at Accenture. ATC Membership platform builds on ReactJS and this project is a beta version. So, this can only support Thai users and Thai format to input data.

## Functionality Checklist

| No  | Functionality               | Status  | Note                    |
| :-: | --------------------------- | :-----: | ----------------------- |
|  1  | See all members list        | &check; | Mandatory Functionality |
|  2  | CRUD members                | &check; | Mandatory Functionality |
|  3  | Routing                     | &check; | Mandatory Functionality |
|  4  | Support visually challenged | &check; | Mandatory Functionality |
|  5  | Dynamic font resizing       | &check; | Optional Functionality  |
|  6  | Watchlist                   | &check; | Optional Functionality  |
|  7  | Search members              | &check; | Optional Functionality  |
|  8  | User experience survey      | &check; | Optional Functionality  |

## The way to see Prototyping, Live Demo, and result of survey

| No  | Description                           | URL                                  | Note               |
| :-: | ------------------------------------- | ------------------------------------ | ------------------ |
|  1  | Prototyping                           | https://bit.ly/2ZGiI8c               | -                  |
|  2  | Live Demo                             | https://atc-membership.herokuapp.com | -                  |
|  3  | Accessibility score from Lighthouse   | https://bit.ly/3nKulUb               | -                  |
|  4  | User Experience survey from HotJar #1 | https://bit.ly/3jWAbkd               | Scrolling Behavior |
|  5  | User Experience survey from HotJar #2 | https://bit.ly/2ZHD4hp               | Screen Recording   |

## Setting up live server in local

```shell
npm install

npm run dev
```

## URL Path in local

| No  | Description          | URL                           |
| :-: | -------------------- | ----------------------------- |
|  1  | Live Demo in local   | http://localhost:3000         |
|  2  | JSON Server in local | http://localhost:3003/members |

## Appendix Accessibility Testing

### Colour Theme

_Colour Circle_

![Color Circle](/src/images/accessibility/color-circle.jpg)

_Colour Theme_

![Color Theme](/src/images/accessibility/theme.png)

### Colour Contrast Checker

_Checks colour contrast in my theme_
![Colour contrast checker image#1](/src/images/accessibility/colour-contrast-checker-1.png)
![Colour contrast checker image#2](/src/images/accessibility/colour-contrast-checker-2.png)
![Colour contrast checker image#3](/src/images/accessibility/colour-contrast-checker-3.png)
![Colour contrast checker image#4](/src/images/accessibility/colour-contrast-checker-4.png)

### WCAG Contrast Checker

_Checks colour contrast with visually impaired in my theme_
![WCAG contrast checker image#1](/src/images/accessibility/wcag_contrast_checker.png)

### WAVE Evaluation Tool

_Checks aria attribute in my site_
![WAVE evaluation tool image#1](/src/images/accessibility/wave.png)

### Heatmap Scrolling from HotJar

_Inspect the behavior of users when he/she use my platform_
![Heatmap Scrolling from HotJar image#1](/src/images/accessibility/heatmap.png)

> Version: 1.1.2
> Last update: 11/01/2021 18:00 GMT+7
