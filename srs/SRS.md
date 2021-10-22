# Common Playground - Software Requirements Specification

## Table of contents

- [Common Playground - Software Requirements Specification](#common-playground---software-requirements-specification)
  - [Table of contents](#table-of-contents)
  - [1. Introduction](#1-introduction)
    - [1.1 Purpose](#11-purpose)
    - [1.2 Scope](#12-scope)
    - [1.3 Definitions, Acronyms and Abbreviations](#13-definitions-acronyms-and-abbreviations)
    - [1.4 References](#14-references)
    - [1.5 Overview](#15-overview)
  - [2. Overall Description](#2-overall-description)
    - [2.1 Vision](#21-vision)
    - [2.2 Use Case Diagram](#22-use-case-diagram)
    - [2.3 Technology Stack](#23-technology-stack)
  - [3. Specific Requirements](#3-specific-requirements)
    - [3.1 Functionality](#31-functionality)
      - [3.1.1 Image resizing](#311-image-resizing)
      - [3.1.2 Image file size reduction](#312-image-file-size-reduction)
      - [3.2.3 split landscape photo into 1080 x 1080 Instagram resolution](#323-split-landscape-photo-into-1080-x-1080-instagram-resolution)
      - [3.1.4 image filetype conversion betwenn png/jpeg](#314-image-filetype-conversion-betwenn-pngjpeg)
      - [3.1.5 Converting Images to low poly](#315-converting-images-to-low-poly)
      - [3.1.6 Converting images to pixelart](#316-converting-images-to-pixelart)
      - [3.1.7 Memetext insertion](#317-memetext-insertion)
      - [3.1.8 Image up & down scaling](#318-image-up--down-scaling)
    - [3.2 Usability](#32-usability)
      - [3.2.1 No training time needed](#321-no-training-time-needed)
      - [3.2.2 Tidy and minimalistic design](#322-tidy-and-minimalistic-design)
    - [3.3 Reliability](#33-reliability)
      - [3.3.1 Availability](#331-availability)
      - [3.3.2 Defect Rate](#332-defect-rate)
    - [3.4 Perfomance](#34-perfomance)
      - [3.4.1 Capacity](#341-capacity)
      - [3.4.2 Storage](#342-storage)
      - [3.4.3 App perfomance / Response time](#343-app-perfomance--response-time)
    - [3.5 Supportability](#35-supportability)
      - [3.5.1 Coding Standards](#351-coding-standards)
      - [3.5.2 Testing Strategy](#352-testing-strategy)
    - [3.6 Design Constraints](#36-design-constraints)
    - [3.7 On-line User Documentation and Help System Requirements](#37-on-line-user-documentation-and-help-system-requirements)
    - [3.8 Purchased Components](#38-purchased-components)
    - [3.9 Interfaces](#39-interfaces)
      - [3.9.1 User Interfaces](#391-user-interfaces)
      - [3.9.2 Hardware Interfaces](#392-hardware-interfaces)
      - [3.9.3 Software Interfaces](#393-software-interfaces)
      - [3.9.4 Communication Interfaces](#394-communication-interfaces)
    - [3.10 Licensing Requirements](#310-licensing-requirements)
    - [3.11 Legal, Copyright, and Other Notices](#311-legal-copyright-and-other-notices)
    - [3.12 Applicable Standards](#312-applicable-standards)
  - [4. Supporting Information](#4-supporting-information)

## 1. Introduction

### 1.1 Purpose

This Software Requirements Specification (SRS) describes all specifications for the application PiXS. It includes an overview about this project and its vision, detailed information about the planned features and boundary conditions of the development process.

### 1.2 Scope

The project is going to be realized as a web application (webapp).
Only users can be actors of this app. There are no additional actors.
The main idea of this project is to manipulate images in certain ways.
Planned features/manipulations are:

- resizing image:
  Adjusting an image's height and width to values given by the user.
- compressing images:
  Reducing an image's file size by implementing a lossy compression algorithm.
- split landscape photo into 1080 x 1080 Instagram resolution:
  A given Image in landscape format is split horizontally into Images with 1080 Pixels in width. The hight of the original image is reduced to 1080 Pixels. The output Images can be posted on Instagram as swipe throught.
- converting to jpeg/png:
  This converts a image to `JPEG` or `PNG` format. This works bidirectional.
- converting images to low poly art:
  This generates a low poly art out of a given image.
- convertint images to pixel art:
  This generates a pixel art out of a given image.
- insert meme text onto image:
  Add a subtitle to an image in a fast way. Hereby, the text is written in the `Impact` font.
- scale up images:
  Uses AI to increase a image's resolution.

### 1.3 Definitions, Acronyms and Abbreviations

| Abbrevation | Explanation                         |
| ----------- | ----------------------------------- |
| SRS         | Software Requirements Specification |
| UC          | Use Case                            |
| n/a         | not applicable                      |
| tbd         | to be determined                    |
| UCD         | Use Case Diagram                    |
| webapp      | Web Application                     |

### 1.4 References

| Title                                                                                                         |    Date    | Publishing organization |
| ------------------------------------------------------------------------------------------------------------- | :--------: | ----------------------- |
| [Common Playground Blog](http://commonplayground.wordpress.com)                                               | 19.10.2021 | PiXS Team               |
| [GitHub](https://github.com/se-pixs)                                                                          | 19.10.2021 | PiXS Team               |
| [SRS Template](https://github.com/nilskre/CommonPlayground/blob/pm/docs/SoftwareRequirementsSpecification.md) | 18.10.2018 | Common Playground Team  |

### 1.5 Overview

The following chapter provides an overview of this project with vision and overall UCD. The third chapter (Requirements Specification) delivers more details about the specific requirements in terms of functionality, usability and design parameters. Finally there is a chapter with supporting information.

## 2. Overall Description

### 2.1 Vision

The idea for this project is a result of missing tools in these fields of image manipulation. We wanted to build something which we could use ourselves. As it is sometimes laborious to resize images or convert them to other formats, we decided to build an own tool for common problems we had. This tool should be easy to use compared to other products. In the end, this application is a collection of problem solvers for the daily life when dealing with small image manipulations. Additionally, the goal of this project is to provide a software that's easily adaptable and where you can add new features quickly.

### 2.2 Use Case Diagram

![OUCD](./../ucd/ucd.drawio.svg)

### 2.3 Technology Stack

The technologies we use are:

Backend:

- Django with Python
- Anaconda as package manage

Frontend:

- ReactJS with Typescript
- Bootstrap
- SASS

IDE:

- Visual Studio Code

Project Management:

- YouTrack
- GitHub

## 3. Specific Requirements

### 3.1 Functionality

This section explains the diffrent use cases of our application.
We plan to implement:

- 3.1.1 Image resizing
- 3.1.2 Image file size reduction
- 3.2.3 split landscape photo into 1080 x 1080 Instagram resolution
- 3.1.4 image filetype conversion betwenn png/jpeg
- 3.1.5 Converting Images to low poly
- 3.1.6 Converting images to pixelart
- 3.1.7 Memetext insertion
- 3.1.8 Image up & down scaling

For each of the use cases the user has to upload an image of his choice.

#### 3.1.1 Image resizing

With this feature, a user can change the resolution of a given image. Two input fields, for height and width, define the target resolution. After these are filled in, a frame, representing the entered values, will be displayed on top of the upladed image. By positioning this frame, the user has the ability to adjust which area will be the output, as a change of the resolution might require image parts to be cut off as a consequence of a changed aspect ratio. Finally, the inputs are confirmed by the user and the processed image is offerd as a download.

#### 3.1.2 Image file size reduction

To fit with the file size requirements on diffrent occations when it comes to uploading images, we offer this feature by making use of lossy file compression. The user adjustes a slider in between the values of zero and one hundred. The provided value is the target file size in percent relative to the original file size. The user confirms the selected percentage. Then the processed image is offered as a download.

#### 3.2.3 split landscape photo into 1080 x 1080 Instagram resolution

On Instagram, you can post multiple images at once. Users can then swipe through the different images. For pictures with a multiple of 1080px in width, it is possible to split up the image in in smaller images with the resolution of 1080x1080 px. When these Images are uploaded in one post a panorama effect is achived.

This feature accepts images with at least 1080px in height and 2160px in width. As the image provided by the user usually has a height greater then 1080px, the height has to be reduced. To ensure important parts of the image are not cut off, the height is halved. To calculate the desired cut-out 540px are then added for the cut at the top and 540px subtracted for the cut at the bottom of the image.
Then the width is divided by 1080. After the outcome is rounded, the calculated value is mutiplied with 1080. The final result is the amount of pixels in width, the original picture is reduced to, in order to be split up in smaller images with the desired width of 1080px. The division of the final result by 1080 produces the amout of necessary smaller images. Finally the image is sliced horizontally into images with a width of 1080px.

After the image is processed, the tailored images are zippped and the archive is offered as a download.

#### 3.1.4 image filetype conversion betwenn png/jpeg

`PNG` and `JPEG` are both very popular image formats. However, some platforms only support `JPEG` or only `PNG`.
To enable the users an easy conversion between these to formats, the feature implements the functionality to convert a `JPEG` file to a `PNG` file or vice versa. After the conversion took place, the processed file is offered as a download.

#### 3.1.5 Converting Images to low poly

This feature converts an image to low poly art. The user can enter the effect intensity. While the effect intensity is adjusted, a live preview is displayed. As soon as the settings fit the user's desires, he/she/it confirms the settings and the image is offered as a download.

#### 3.1.6 Converting images to pixelart

Similar to point 3.1.5 the user enters the effect intensity. The backend processes the input and the user is presented with
a live preview. After the user decited for a certain setting, he/she/it confirms by clicking a button. The processed Image is offerd as a download.

#### 3.1.7 Memetext insertion

It is very common to add text in the font "Impact" and, therefore, create a meme. With this feature, the user can create a textbox in a given picture. The entered text will be displayed in the font Impact. The position of the textbox in the picture can be set by the user. Finally, the user confirms by clicking a button and the processed image is offered as a download.

#### 3.1.8 Image up & down scaling

Sometimes, you only have an image with a low resolution but you have to use it on your PowerPoint slides. Therefore, you need to increase the resolution so that the picture is also crispy clean on the slides. This is the feature's goal.

However, it might not be implemented. We'll decide to a later point in time whether we want to include it in our product or not.

### 3.2 Usability

We plan on designing the user interface as intuitive and self explanatory to make the user feel as comfortable as possible using the app either on mobile or desktop devices. Though tooltips will be available in the user interface, the description of all tuneable parameters should be self explanatory.

#### 3.2.1 No training time needed

As our application is planned as webapp, no local installation is needed. After opening our webapp in a browser, every user is able to use all features without any explanation or help.

#### 3.2.2 Tidy and minimalistic design

We want to implement our app with a tidy and minimalistic design. This way the user is able to interact in familiar ways with the app with only minimal prior knowledge of the applicaton.

### 3.3 Reliability

#### 3.3.1 Availability

The server shall be available 99% of the time. Downtimes are only expected, while a new release is rolled out. However, these downtimes should only be lasting from few seconds to few minutes. Further downtimes depend on the cloud provider and range between 98 and 99.9%.

#### 3.3.2 Defect Rate

As we are not persisting any data beyond the definition of the functionalities, we should not experience any loss of data.

### 3.4 Perfomance

#### 3.4.1 Capacity

Because all functions are executed by the server, more users require more server capacities. Nevertheless, the asynchronous execution of requests allow for an easy scalability of the server landscape.

#### 3.4.2 Storage

As we are not persisting any data beyond the definition of the functionalities, there is no need for storage capacity.

#### 3.4.3 App perfomance / Response time

The response time depends on the requested function. Some functionalities require more time-intensive calculations than others. The response time also rises with the size of the images. We aim to keep the response time as low as possible but also provide the user information on the current progress (e.g. estimated time). This will make the user experience much better.

### 3.5 Supportability

#### 3.5.1 Coding Standards

We are going to write the code by using all of the most common clean code standards. For example we will name our variables and methods by their functionalities. This will keep the code easy to read by everyone and make further developement much easier.

#### 3.5.2 Testing Strategy

The application will have a high test coverage and all image manipulation functionalities and edge cases should be tested. Further mistakes in the implementation will be discovered instantly and it will be easy to locate the error.

### 3.6 Design Constraints

In order to create a modern and easy-to-use design for both the user interface and the architecture of the application, the functionalities are kept as modular as possible.

Since we are programming a web application, we have chosen TypeScript as the programming language for the frontend. For the simple design of the website we use bootstrap and sass. In the backend we will rely on Django with Python and use Anaconda as package manage. The supported platform will be a variety of popular web browsers:

- Google Chrome
- Firefox
- Opera
- Safari
- etc.

### 3.7 On-line User Documentation and Help System Requirements

The usage of the app should be as intuitive as possible so it won't need any further documentation.

### 3.8 Purchased Components

We don't have any purchased components yet. If there will be purchased components in the future we will list them here.

### 3.9 Interfaces

#### 3.9.1 User Interfaces

There is only a single interface providing all of the listed functionalities of the PiXS webapp. The user is able to choose the desired functionality and can enter corresponding parameters in order to use it.

#### 3.9.2 Hardware Interfaces

(n/a)

#### 3.9.3 Software Interfaces

The webapp will be available in a variety of common used web-browsers (e.g. _Google Chrome_, _Firefox_, _Opera_, _Safari_, etc.)

#### 3.9.4 Communication Interfaces

The server and client will transfer data using the `HTTP` protocol.

### 3.10 Licensing Requirements

No parts of the software require additional licensing.

### 3.11 Legal, Copyright, and Other Notices

The PiXS logo is licensed to be used by the PiXS application only. We do not take responsibilty for any incorrect data or errors in the application that may occur while using the PiXS application.

### 3.12 Applicable Standards

The development will follow the common clean code standards and naming conventions. The conventions will be updated as soon as they have been discussed in our team.

## 4. Supporting Information

For any further information you can contact the PiXS team or check our [PiXS Blog](https://seproject9463912.wordpress.com/). The team members are:

- Fabian Albrecht
- Paul Ehrhard
- Tobias Kreuß
- Tobias Krüger
- Luca Müller
