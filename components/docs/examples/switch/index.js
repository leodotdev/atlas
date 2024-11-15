// Import Statements
import { HStack } from '@/components/ui/hstack';
import { Switch } from '@/components/ui/switch';
import { Text } from '@/components/ui/text';
import colors from 'tailwindcss/colors';
// Examples
export const examples = [
  {
    name: "Switch With Label",
    Code: (
      <HStack space="md"><Switch trackColor={{ false: colors.gray[300], true: colors.gray[500] }} thumbColor={colors.gray[50]} activeThumbColor={colors.gray[50]} ios_backgroundColor={colors.gray[300]} /><Text size="sm" >Allow notifications</Text></HStack>
    )
  },
  {
    name: "Checked State",
    Code: (
      <HStack space="md"><Switch defaultValue={true} trackColor={{ false: colors.gray[300], true: colors.gray[500] }} thumbColor={colors.gray[50]} activeThumbColor={colors.gray[50]} ios_backgroundColor={colors.gray[300]} /><Text size="sm" >Public profile</Text></HStack>
    )
  },
]