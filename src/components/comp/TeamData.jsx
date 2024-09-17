import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function TeamData() {
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-right">Role</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Sasi Sabado</TableCell>
            <TableCell>Tech Enginer</TableCell>
            <TableCell>mktmakanta"gmail..com</TableCell>
            <TableCell className="text-right">Member</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
