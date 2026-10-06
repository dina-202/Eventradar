# EventRadar

EventRadar is a small, independent **non-commercial UK event-discovery demo**.

It exists to demonstrate a straightforward use case for the Skiddle Events API: helping visitors discover events by city, date, category and keyword, then directing them to the corresponding Skiddle event page.

## Current status

The site currently uses clearly labelled sample listings while Skiddle API access is pending.

Once API access is approved, the intended integration is:

- retrieve public event, venue and artist information from the Skiddle API;
- display Skiddle as the data source;
- preserve the event links supplied by the API;
- direct users to Skiddle for the official event listing;
- keep the site focused on discovery rather than ticket sales or payment processing.

## Demo features

- UK city filter
- event category filter
- date-window filter
- event / venue search
- responsive static UI
- no accounts or payments

## Technology

Plain HTML, CSS and JavaScript. No backend or database is needed for the pre-API demo.

## Data

All event names and venue names currently shown in the repository are fictional sample data created for the demo. They are not presented as Skiddle listings.

## Run locally

Open `index.html` in a browser, or serve the directory with any static web server.

## Purpose

This repository is deliberately small. It is an API-integration demonstration, not a ticketing platform.
