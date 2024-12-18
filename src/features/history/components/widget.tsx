import { observer } from "@legendapp/state/react";
import { View } from "react-native";
import { Text } from "~/components/ui";

const generateData = () => {
  const data = [];
  const currentDate = new Date();
  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  // Add empty slots for days before the first of the month
  const startOffset = (firstDay.getDay() + 6) % 7;
  console.log(startOffset);

  for (let i = 0; i < startOffset; i++) {
    data.push(null);
  }

  // Add the actual days
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const value = Math.random() > 0.5 ? Math.floor(Math.random() * 10) : 0;

    data.push({
      date,
      value,
    });
  }

  return data;
};

export const HistoryWidget = observer(() => {
  const data = generateData();
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Function to get color intensity based on value
  const getColor = (value: number) => {
    const baseColor = [76, 175, 80]; // Green color (RGB)
    const intensity = value / 9; // Normalize value to 0-1 range
    return `rgba(${baseColor[0]}, ${baseColor[1]}, ${baseColor[2]}, ${
      0.1 + intensity * 0.9
    })`;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      month: "long",
    });
  };

  // Split data into weeks
  const weeks = [];
  for (let i = 0; i < data.length; i += 7) {
    weeks.push(data.slice(i, i + 7));
  }

  return (
    <View className="border border-solid border-muted bg-card rounded-lg p-4 max-w-screen-sm">
      <Text className="font-semibold mb-4">
        Workout history for {formatDate(new Date())}
      </Text>
      <View className="justify-center items-center">
        <View className="gap-2">
          {weeks.map((week, weekIndex) => (
            <View key={`week-${weekIndex}`} className="flex flex-row gap-2">
              {week.map((day, dayIndex) => (
                <View key={`week-${weekIndex}-day-${dayIndex}`} className="w-8">
                  {day ? (
                    day.value ? (
                      <View
                        className="aspect-square rounded-md"
                        style={{
                          backgroundColor: getColor(day.value),
                        }}
                      />
                    ) : (
                      <View className="aspect-square rounded-md bg-neutral-800" />
                    )
                  ) : (
                    <View className="aspect-square rounded-md bg-neutral-800/30" />
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
        <View className="flex flex-row gap-2 mt-2">
          {weekdays.map((day, index) => (
            <View className="w-8" key={day}>
              <Text key={`day-${index}`} className="text-center">
                {day[0]}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
});
