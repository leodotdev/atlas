// Import Statements
import { VStack } from '@/components/ui/vstack';
import { Input, InputField } from '@/components/ui/input';
import { AlertCircleIcon, CheckIcon, CircleIcon } from '@/components/ui/icon';
import { Button, ButtonText } from '@/components/ui/button';
import { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } from '@/components/ui/radio';
import { Checkbox, CheckboxIndicator, CheckboxLabel, CheckboxIcon, CheckboxGroup } from '@/components/ui/checkbox';
import { Textarea, TextareaInput } from '@/components/ui/textarea';
import { HStack } from '@/components/ui/hstack';
import React from 'react';
import { FormControl, FormControlLabel, FormControlLabelText, FormControlHelper, FormControlHelperText, FormControlError, FormControlErrorIcon, FormControlErrorText } from '@/components/ui/form-control';
// Examples
export const examples = [
  {
    name: "FormControl",
    Code: (
      function App () { const [isInvalid, setIsInvalid] = React.useState(false); const [inputValue, setInputValue] = React.useState('12345'); const handleSubmit = () =>{ if (inputValue.length< 6) { setIsInvalid(true); } else { setIsInvalid(false); } }; return (<VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4"><FormControl isInvalid={isInvalid} {...props}><FormControlLabel><FormControlLabelText>Password</FormControlLabelText></FormControlLabel><Input className="my-1" size={props.size}><InputField type="password" placeholder="password" value={inputValue} onChange={(e) =>setInputValue(e.target.value)} /></Input><FormControlHelper><FormControlHelperText>Must be atleast 6 characters.</FormControlHelperText></FormControlHelper><FormControlError><FormControlErrorIcon as={AlertCircleIcon} /><FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText></FormControlError></FormControl><Button className="w-fit self-end mt-4" size="sm" onPress={handleSubmit}><ButtonText>Submit</ButtonText></Button></VStack>); };
    )
  },
  {
    name: "FormControlLabel",
    Code: (
      function App () { const [values, setValues] = React.useState("Mango"); return (<FormControl><FormControlLabel><FormControlLabelText>Favourite fruit</FormControlLabelText></FormControlLabel><RadioGroup className='my-2' value={values} onChange={setValues}><VStack space="sm"><Radio size="sm" value="Mango"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Mango</RadioLabel></Radio><Radio size="sm" value="Apple"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Apple</RadioLabel></Radio><Radio size="sm" value="Orange"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Orange</RadioLabel></Radio></VStack></RadioGroup><FormControlHelper><FormControlHelperText>Choose the fruit you like the most</FormControlHelperText></FormControlHelper></FormControl>) }
    )
  },
  {
    name: "FormControlLabelText",
    Code: (
      function App() { const [values, setValues] = React.useState(['bits']); return (<FormControl><FormControlLabel><FormControlLabelText>Sign up for newsletters</FormControlLabelText></FormControlLabel><CheckboxGroup className="my-2" value={values} onChange={(keys) =>{ setValues(keys); }} ><VStack space="sm"><Checkbox size="sm" value="bits"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Daily Bits</CheckboxLabel></Checkbox><Checkbox size="sm" value="event"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Event Updates</CheckboxLabel></Checkbox><Checkbox size="sm" value="sponsorship"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Sponsorship</CheckboxLabel></Checkbox></VStack></CheckboxGroup><FormControlHelper><FormControlHelperText>Subscribe to newsletters for updates</FormControlHelperText></FormControlHelper></FormControl>); }
    )
  },
  {
    name: "FormControlHelper",
    Code: (
      <FormControl><FormControlLabel><FormControlLabelText>Comment</FormControlLabelText></FormControlLabel><Textarea><TextareaInput /></Textarea><FormControlHelper ><FormControlHelperText>Type your comment above</FormControlHelperText></FormControlHelper></FormControl>
    )
  },
  {
    name: "FormControlHelperText",
    Code: (
      <FormControl isInvalid><FormControlLabel><FormControlLabelText>Which time slot works best for you?</FormControlLabelText></FormControlLabel><RadioGroup className='my-2'><VStack space="sm"><Radio size="sm" value="Mango"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Monday</RadioLabel></Radio><Radio size="sm" value="Apple"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Tuesday</RadioLabel></Radio><Radio size="sm" value="Orange"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Wednesday</RadioLabel></Radio></VStack></RadioGroup><FormControlError><FormControlErrorIcon as={AlertCircleIcon}/><FormControlErrorText>Choose one time slot for the meeting</FormControlErrorText></FormControlError></FormControl>
    )
  },
  {
    name: "FormControlError",
    Code: (
      <HStack><FormControl><Button variant='outline' action='secondary'><ButtonText>Cancel</ButtonText></Button></FormControl><FormControl><Button action='negative' className='ml-4'><ButtonText className="text-white group-hover/button:text-white group-active/button:text-white">Delete</ButtonText></Button></FormControl></HStack>
    )
  },
  {
    name: "FormControlErrorText",
    Code: (
      function App () { const [isInvalid, setIsInvalid] = React.useState(false); const [inputValue, setInputValue] = React.useState('12345'); const handleSubmit = () =>{ if (inputValue.length< 6) { setIsInvalid(true); } else { setIsInvalid(false); } }; return (<VStack className="w-full max-w-[300px] rounded-md border border-background-200 p-4"><FormControl isInvalid={isInvalid} {...props}><FormControlLabel><FormControlLabelText>Password</FormControlLabelText></FormControlLabel><Input className="my-1" size={props.size}><InputField type="password" placeholder="password" value={inputValue} onChange={(e) =>setInputValue(e.target.value)} /></Input><FormControlHelper><FormControlHelperText>Must be atleast 6 characters.</FormControlHelperText></FormControlHelper><FormControlError><FormControlErrorIcon as={AlertCircleIcon} /><FormControlErrorText>Atleast 6 characters are required.</FormControlErrorText></FormControlError></FormControl><Button className="w-fit self-end mt-4" size="sm" onPress={handleSubmit}><ButtonText>Submit</ButtonText></Button></VStack>); };
    )
  },
  {
    name: "Form Control with Radio",
    Code: (
      function App () { const [values, setValues] = React.useState("Mango"); return (<FormControl><FormControlLabel><FormControlLabelText>Favourite fruit</FormControlLabelText></FormControlLabel><RadioGroup className='my-2' value={values} onChange={setValues}><VStack space="sm"><Radio size="sm" value="Mango"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Mango</RadioLabel></Radio><Radio size="sm" value="Apple"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Apple</RadioLabel></Radio><Radio size="sm" value="Orange"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Orange</RadioLabel></Radio></VStack></RadioGroup><FormControlHelper><FormControlHelperText>Choose the fruit you like the most</FormControlHelperText></FormControlHelper></FormControl>) }
    )
  },
  {
    name: "Form Control with Checkbox",
    Code: (
      function App() { const [values, setValues] = React.useState(['bits']); return (<FormControl><FormControlLabel><FormControlLabelText>Sign up for newsletters</FormControlLabelText></FormControlLabel><CheckboxGroup className="my-2" value={values} onChange={(keys) =>{ setValues(keys); }} ><VStack space="sm"><Checkbox size="sm" value="bits"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Daily Bits</CheckboxLabel></Checkbox><Checkbox size="sm" value="event"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Event Updates</CheckboxLabel></Checkbox><Checkbox size="sm" value="sponsorship"><CheckboxIndicator className="mr-2"><CheckboxIcon as={CheckIcon} /></CheckboxIndicator><CheckboxLabel>Sponsorship</CheckboxLabel></Checkbox></VStack></CheckboxGroup><FormControlHelper><FormControlHelperText>Subscribe to newsletters for updates</FormControlHelperText></FormControlHelper></FormControl>); }
    )
  },
  {
    name: "Form Control with Textarea",
    Code: (
      <FormControl><FormControlLabel><FormControlLabelText>Comment</FormControlLabelText></FormControlLabel><Textarea><TextareaInput /></Textarea><FormControlHelper ><FormControlHelperText>Type your comment above</FormControlHelperText></FormControlHelper></FormControl>
    )
  },
  {
    name: "Form Control with Error",
    Code: (
      <FormControl isInvalid><FormControlLabel><FormControlLabelText>Which time slot works best for you?</FormControlLabelText></FormControlLabel><RadioGroup className='my-2'><VStack space="sm"><Radio size="sm" value="Mango"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Monday</RadioLabel></Radio><Radio size="sm" value="Apple"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Tuesday</RadioLabel></Radio><Radio size="sm" value="Orange"><RadioIndicator><RadioIcon as={CircleIcon} /></RadioIndicator><RadioLabel>Wednesday</RadioLabel></Radio></VStack></RadioGroup><FormControlError><FormControlErrorIcon as={AlertCircleIcon}/><FormControlErrorText>Choose one time slot for the meeting</FormControlErrorText></FormControlError></FormControl>
    )
  },
  {
    name: "Form Control with Form Actions",
    Code: (
      <HStack><FormControl><Button variant='outline' action='secondary'><ButtonText>Cancel</ButtonText></Button></FormControl><FormControl><Button action='negative' className='ml-4'><ButtonText className="text-white group-hover/button:text-white group-active/button:text-white">Delete</ButtonText></Button></FormControl></HStack>
    )
  },
]