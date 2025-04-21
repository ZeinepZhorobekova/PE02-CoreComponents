import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 - Secure Systems Architecture',
    'CS 506 - Data Structures and Algorithms',
    'CS 517 - Programming Languages',
    'CS 519 - Operating Systems',
    'CS 547 - Software Engineering',
    'CS 570 - Database Systems',
    'CS 580 - Computer Networks',
    'CS 592 - Web Application Development'
  ];

  const depthCourses = [
    'CS 624 - Full-Stack Mobile App Development',
    'CS 626 - Cloud Computing'
  ];

  const capstoneCourse = ['CS 698 - Capstone Project'];

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/icon.png')} style={styles.image} />

      <Text style={styles.title}>MSCS Courses at CityU</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />
      {favoriteCourse ? (
        <Text style={styles.favorite}>Your favorite course is: {favoriteCourse}</Text>
      ) : null}

      <Text style={styles.heading}>Core Courses</Text>
      {coreCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.heading}>Depth of Study</Text>
      {depthCourses.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}

      <Text style={styles.heading}>Capstone</Text>
      {capstoneCourse.map((course, index) => (
        <Text key={index} style={styles.courseText}>{course}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
    backgroundColor: '#f2f2f2'
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 8
  },
  favorite: {
    fontStyle: 'italic',
    marginBottom: 15
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  },
  courseText: {
    paddingVertical: 5
  }
});

export default App;
