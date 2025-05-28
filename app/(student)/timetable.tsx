import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONT, SIZES, SPACING, SHADOWS } from '@/constants/theme';
import Header from '@/components/shared/Header';
import { Download, Calendar } from 'lucide-react-native';

const mockTimetable = [
  {
    date: '2024-03-15',
    sessions: [
      {
        time: '09:00 AM - 10:30 AM',
        courseId: 'CS101',
        courseName: 'Introduction to Computer Science',
        session: 'Theory'
      },
      {
        time: '11:00 AM - 12:30 PM',
        courseId: 'MA201',
        courseName: 'Advanced Mathematics',
        session: 'Theory'
      }
    ]
  },
  {
    date: '2024-03-16',
    sessions: [
      {
        time: '10:00 AM - 11:30 AM',
        courseId: 'CS102',
        courseName: 'Data Structures',
        session: 'Lab'
      },
      {
        time: '02:00 PM - 03:30 PM',
        courseId: 'PH101',
        courseName: 'Physics',
        session: 'Theory'
      }
    ]
  }
];

export default function TimetableScreen() {
  const handleDownload = () => {
    // In a real app, this would generate and download a PDF
    console.log('Downloading timetable...');
  };

  return (
    <View style={styles.container}>
      <Header title="Exam Timetable" />
      
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.downloadButton}
          onPress={handleDownload}
        >
          <Download size={20} color={COLORS.white} />
          <Text style={styles.downloadButtonText}>Download Timetable</Text>
        </TouchableOpacity>

        <ScrollView style={styles.timetableContainer}>
          {mockTimetable.map((day, index) => (
            <View key={index} style={styles.dayContainer}>
              <View style={styles.dateHeader}>
                <Calendar size={20} color={COLORS.primary} />
                <Text style={styles.dateText}>
                  {new Date(day.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Text>
              </View>

              {day.sessions.map((session, sessionIndex) => (
                <View key={sessionIndex} style={styles.sessionCard}>
                  <View style={styles.timeContainer}>
                    <Text style={styles.timeText}>{session.time}</Text>
                    <View style={styles.sessionBadge}>
                      <Text style={styles.sessionType}>{session.session}</Text>
                    </View>
                  </View>
                  
                  <View style={styles.courseContainer}>
                    <Text style={styles.courseId}>{session.courseId}</Text>
                    <Text style={styles.courseName}>{session.courseName}</Text>
                  </View>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: SPACING.md,
  },
  downloadButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: SPACING.md,
    marginBottom: SPACING.md,
    ...SHADOWS.small,
  },
  downloadButtonText: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.md,
    color: COLORS.white,
    marginLeft: SPACING.sm,
  },
  timetableContainer: {
    flex: 1,
  },
  dayContainer: {
    marginBottom: SPACING.lg,
  },
  dateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  dateText: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.md,
    color: COLORS.primary,
    marginLeft: SPACING.sm,
  },
  sessionCard: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    ...SHADOWS.small,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  timeText: {
    fontFamily: FONT.medium,
    fontSize: SIZES.sm,
    color: COLORS.gray,
  },
  sessionBadge: {
    backgroundColor: `${COLORS.secondary}20`,
    paddingVertical: SPACING.xs,
    paddingHorizontal: SPACING.sm,
    borderRadius: 12,
  },
  sessionType: {
    fontFamily: FONT.medium,
    fontSize: SIZES.xs,
    color: COLORS.secondary,
  },
  courseContainer: {
    borderTopWidth: 1,
    borderTopColor: COLORS.lightGray,
    paddingTop: SPACING.sm,
  },
  courseId: {
    fontFamily: FONT.semiBold,
    fontSize: SIZES.md,
    color: COLORS.darkGray,
    marginBottom: 2,
  },
  courseName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.sm,
    color: COLORS.gray,
  },
});