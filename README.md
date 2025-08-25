# Junior Front-end Engineer Assignment - Aug 2025

* Copyright (c) River Flow Solutions, Jsc. 2025. All rights reserved.
* We only use the submissions for candidates evaluation.

## Assignment List

- Layout Implementation (CSS, HTML)
- Multi-Step Form with Live PDF Preview
- Map & Location List Synchronization

## General Requirements

- Use either [ShaDN](https://ui.shadcn.com/), [TailwindCSS](https://tailwindcss.com/) for UI layout
- Use either of ReactJS, VueJS, Svelte-Kit for the Main Framework.
- Use either of the following libaries for State Management:
  - [Redux-toolkit](https://redux-toolkit.js.org/)
  - [Nanostores](https://github.com/nanostores/nanostores)
- No limit of using AI / help as long as the candidate can understand and explain the related technical details.

## Instructions

Candidate must fork this repository to a public repo under their name for submission.

Each candidate must implement at least 2 assignments out of 3 from the list. 

In case of technical difficulties, candidate may describe how the problem should be resolved in NARRATION.md. However, executable code is always preferrable.

Remember reply to email when you complete the assignment.

## A1: Layout Implementation

- Implement Figma Screens into HTML and CSS, using frameworks like TailwindCSS, Bootstrap, or custom CSS
- Download and import [Design](rfx_figma_recur_aug_2025.fig) to your figma.

## A2: Multi-Step Form with Live PDF Preview

Implement an application that allows user to fill a multi-step form and preview the filled form as a PDF preview.
- The application must have at least 3 distinct steps, with each step containing its own form.
- Users can navigate forward and backward, all previously entered data must be preserved when moving between steps.
- Users can reset the data of the entire form.
- Can only click the "Continue" button after filling in all the fields in the form.
- When the user submits (for each step of the form or the entire application), immediately display the data on the PDF preview area.
- Show progress bar of the whole process.
- Validate the form data before submitting.

## A3: Map & Location List Synchronization

Use either [Mapbox GL](https://docs.mapbox.com/mapbox-gl-js/), [Leaflet](https://leafletjs.com/) or [Google Maps](https://developers.google.com/maps/documentation) for the map component.

Implement a component that render the [Location List](location.json) as a list of locations with map synchronization.
- Display the list of locations in a list view and all locations must be marked on the map.
- Allow user to sort the list of locations by rating.
- Allow user to search the list of locations by name or address.
- Allow user to select a location from the list and the map will be synchronized with the selected location (fly to the selected location).
- Allow user to select map marker and the list will be synchronized with the selected location (scroll to the selected location in the list).
- Hightlight both the list and the map marker of the selected location.
- Show a popup/tooltip with location details when clicking the marker.
- Optimize the locations list for large dataset.