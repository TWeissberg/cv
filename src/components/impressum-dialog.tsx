"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImpressumDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ImpressumDialog = ({
  open,
  onOpenChange,
}: ImpressumDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Impressum</DialogTitle>
          <DialogDescription>
            <p>
              Tobias Weißberg
              <br />
              Friedrich-Hirzebruch-Allee 8
              <br />
              53115 Bonn, Germany
            </p>
            <p>
              Contact: <a href="mailto:weissberg@uni-bonn.de">weissberg@uni-bonn.de</a>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
