import React, { useState } from "react";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { CheckIcon } from "@/components/ui/icon";
import { Center } from "@/components/ui/center";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";

const initialTodoList = [
  { id: 1, label: "Feed Tommy", isDone: false },
  { id: 2, label: "Buy milk and eggs", isDone: false },
  { id: 3, label: "Yoga with matty", isDone: false },
];

export const CheckboxDemo = () => {
  const [todoList, setTodoList] = useState(initialTodoList);

  const handleCheckboxChange = (id: number) => {
    setTodoList((prevList) =>
      prevList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <Center className="flex-1">
      <Box className="flex flex-col gap-4">
        <Text size="xl" className="font-semibold text-typography-900">
          To-do List
        </Text>

        {todoList.map((todo) => (
          <Checkbox
            key={todo.id}
            value={todo.id.toString()}
            isChecked={todo.isDone}
            onChange={() => handleCheckboxChange(todo.id)}
            className="ml-3"
          >
            <CheckboxIndicator>
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <CheckboxLabel className={`${todo.isDone ? "line-through" : ""}`}>
              {todo.label}
            </CheckboxLabel>
          </Checkbox>
        ))}
      </Box>
    </Center>
  );
};

export default CheckboxDemo;
