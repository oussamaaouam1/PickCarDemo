import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";
import dayjs from "dayjs"; // Library for date manipulation

const DateRangePicker = ({ onChange }) => {
  // State to store the selected date range
  const [selectedRange, setSelectedRange] = useState({
    startDate: null, // Initial start date is null
    endDate: null, // Initial end date is null
  });

  // Handler for when user confirms their date selection
  const handleConfirm = () => {
    if (selectedRange.startDate && selectedRange.endDate) {
      // Format dates for console logging in YYYY-MM-DD format
      const formattedStartDate = dayjs(selectedRange.startDate).format(
        "YYYY-MM-DD"
      );
      const formattedEndDate = dayjs(selectedRange.endDate).format(
        "YYYY-MM-DD"
      );

      // Log selection details to console for debugging
      console.log("Selected Date Range:");
      console.log("Start Date:", formattedStartDate);
      console.log("End Date:", formattedEndDate);
      // Calculate and log the number of days between dates
      console.log(
        "Number of days:",
        dayjs(selectedRange.endDate).diff(dayjs(selectedRange.startDate), "day")
      );

      // Pass formatted dates back to parent component in MMM D, YYYY format (e.g., Mar 26, 2024)
      onChange([
        dayjs(selectedRange.startDate).format("MMM D, YYYY"),
        dayjs(selectedRange.endDate).format("MMM D, YYYY"),
      ]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Calendar container with fixed height */}
      <View style={styles.calendarContainer}>
        <DateTimePicker
          // Basic configuration
          mode="range" // Enable range selection mode
          startDate={selectedRange.startDate}
          
          endDate={selectedRange.endDate}
          // Handler for when dates are selected
          onChange={({ startDate, endDate }) => {
            setSelectedRange({ startDate, endDate });
          }}
          // Visual customization
          selectedItemColor="#46B9B0" // Color for selected dates
          selectedRangeBackgroundColor="#46B9B080" // Background color for date range
          minimumDate={dayjs().toDate()} // Prevent selecting past dates
          // Header configuration
          headerButtonsPosition="right" // Position of navigation arrows
          headerButtonColor="#46B9B0" // Color of navigation arrows
          headerButtonSize={24} // Size of navigation arrows
          // Calendar display options
          displayFullDays={true} // Show all days of the month
          // Text styling
          calendarTextStyle={styles.calendarText} // Style for regular date text
          selectedTextStyle={styles.selectedText} // Style for selected date text
          headerTextStyle={styles.headerText} // Style for month/year text
          weekDaysTextStyle={styles.weekDaysText} // Style for weekday names
        />
      </View>

      {/* Confirm button */}
      <TouchableOpacity
        style={[
          styles.confirmButton,
          // Apply disabled style if dates aren't selected
          (!selectedRange.startDate || !selectedRange.endDate) &&
            styles.disabledButton,
        ]}
        onPress={handleConfirm}
        disabled={!selectedRange.startDate || !selectedRange.endDate}
      >
        <Text style={styles.confirmButtonText}>
          {/* Dynamic button text based on selection state */}
          {!selectedRange.startDate || !selectedRange.endDate
            ? "Select Dates"
            : "Confirm Dates"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "white",
  },
  calendarContainer: {
    height: 380, // Fixed height for calendar
  },
  confirmButton: {
    backgroundColor: "#46B9B0",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    marginHorizontal: 20,
    alignItems: "center",
  },
  disabledButton: {
    backgroundColor: "#cccccc", // Gray color for disabled state
  },
  confirmButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  calendarText: {
    fontSize: 16,
    color: "#333", // Dark gray for regular dates
  },
  selectedText: {
    color: "white",
    fontWeight: "bold", // Make selected dates bold and white
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333", // Style for month/year text in header
  },
  weekDaysText: {
    color: "#666",
    fontSize: 14, // Style for weekday names (Mon, Tue, etc.)
  },
});

export default DateRangePicker;
