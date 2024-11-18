// Import Statements
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
// Examples
export const examples = [
  {
    name: "Text Sizes",
    Code: (
      function App() { const sizes = [ 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', ]; return (<Center>{sizes.map((size, index) =>(<Text size={size} className="text-center" key={index}>{size}</Text>))}</Center>); }
    )
  },
]