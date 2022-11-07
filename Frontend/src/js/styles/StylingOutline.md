# Style Guide

[Figma Styles](https://www.figma.com/file/xMpANAPFy9g4ooRFoZwidN/Waterloop-POD?node-id=511%3A1477)

## Colours and Fonts
- This project uses [React Styling Components](https://styled-components.com/docs/basics) for our css
- All colours and fonts used in this project should be predefined in ```/src/js/styles/theme.js```
- When accessing a predefined style in a Style Component you're making, call that style by: ```color: ${({ theme }) => theme.colours.black}``` for **example**

## Buttons
- Premade buttons can be found in ```/src/js/components/Buttons```
- There are multiple Buttons you can export, including ```ButtonYellow``` and ```ButtonDarkGrey```
- To add a click event to a button, add ```onClick={yourFunctionHere}``` to the tag
- To import a button:
```import { ButtonYellow } from './components/Buttons';```
- To use the Default Button tag:
```<ButtonDarkGrey>Default Size</ButtonDarkGrey>```
- To customize the **size** or **font size**:
```<ButtonYellow width="400px" height="80px" fontSize="30px">Custom Size</ButtonYellow>```

**Button examples:**

![Button Image](../../../../img/miscellaneous/ButtonImages.png?raw=true)