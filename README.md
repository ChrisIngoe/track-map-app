# TRACK MAP

A React Native mobile application built using the EXPO framework. The application is used to send location information to a central server so that it can be consumed by web applications and analysis.

## Getting Started

- `npm install`
- `yarn start`

## Issues

Here are some development issues you may encounter and accompanying resolutions:

### Ionic fonts issue:

##### Issue:

fontFamily "ionicons" is not a system font and has not been loaded through Font.loadAsync.

#### Resolution:

`rm -rf node_modules/ && rm -f package-lock.json && rm -f yarn.lock && npm cache verify && npm install && expo r -c`
