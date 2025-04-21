import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet } from 'react-native';

const Index = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  return (
    <ScrollView style={styles.container}>
     <Image source={require('../../assets/icon.png')} style={styles.image} />
      <Text style={styles.heading}>MSCS Core Components</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Enter your favorite course"
        value={favoriteCourse}
        onChangeText={setFavoriteCourse}
      />
      
      {favoriteCourse !== '' && (
        <Text style={styles.favorite}>Your favorite course is: {favoriteCourse}</Text>
      )}
      
      <Text style={styles.subheading}>Core Courses</Text>
      {[
        "CS 504 – Operating Systems",
        "CS 506 – Programming Principles",
        "CS 517 – Data Structures & Algorithms",
        "CS 533 – Computer Architecture",
        "CS 547 – Software Engineering",
        "CS 552 – Database Systems",
        "CS 561 – Network Systems",
        "CS 570 – Web App Development"
      ].map((course, index) => (
        <Text key={index} style={styles.course}>{course}</Text>
      ))}

      <Text style={styles.subheading}>Depth of Study</Text>
      <Text style={styles.course}>CS 620 – AI & Machine Learning</Text>
      <Text style={styles.course}>CS 624 – Full Stack Mobile Dev</Text>

      <Text style={styles.subheading}>Capstone</Text>
      <Text style={styles.course}>CS 690 – Capstone Project</Text>
    </ScrollView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 16,
  },
  heading: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 8,
    marginVertical: 12,
    borderRadius: 5,
  },
  favorite: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  course: {
    fontSize: 16,
    marginBottom: 6,
  },
});
