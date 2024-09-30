import React from "react";
import { Box } from "@/components/ui/box";
import { Center } from "@/components/ui/center";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableData,
  TableFooter,
} from "@/components/ui/table";
import { Badge, BadgeText, BadgeIcon } from "@/components/ui/badge";
import { CloseIcon, CheckIcon, InfoIcon } from "@/components/ui/icon";

const TableDemo = () => {
  return (
    <Center className="flex-1 bg-typography-0 p-6">
      <Box className="w-full rounded-xl border border-outline-300 overflow-hidden">
        <Table className="w-full">
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Class</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableData>Rajesh</TableData>
              <TableData>VII</TableData>
              <TableData>
                <Badge
                  size="sm"
                  variant="solid"
                  action="success"
                  className="w-fit"
                >
                  <BadgeIcon as={CheckIcon} className="mr-2" />
                  <BadgeText>Success</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>Ravi</TableData>
              <TableData>IX</TableData>
              <TableData>
                <Badge
                  size="sm"
                  variant="solid"
                  action="warning"
                  className="w-fit"
                >
                  <BadgeIcon as={InfoIcon} className="mr-2" />
                  <BadgeText>Pending</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
            <TableRow className="border-none">
              <TableData>Ananya</TableData>
              <TableData>X</TableData>
              <TableData>
                <Badge
                  size="sm"
                  variant="solid"
                  action="error"
                  className="w-fit"
                >
                  <BadgeIcon as={CloseIcon} className="mr-2" />
                  <BadgeText>Failed</BadgeText>
                </Badge>
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Center>
  );
};

export default TableDemo;
