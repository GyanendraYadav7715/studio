"use client";

import type { VM } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { OsIcon } from '@/components/icons/os-icon';
import { Cpu, Database, MemoryStick, Play, Square, Terminal, Trash2 } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface VmCardProps {
  vm: VM;
  onToggleStatus: () => void;
  onDelete: () => void;
}

export function VmCard({ vm, onToggleStatus, onDelete }: VmCardProps) {
  const getStatusVariant = (status: VM['status']) => {
    switch (status) {
      case 'Running':
        return 'default';
      case 'Stopped':
        return 'secondary';
      case 'Creating':
        return 'outline';
      case 'Deleting':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const isActionable = vm.status === 'Running' || vm.status === 'Stopped';

  return (
    <Card className="flex flex-col transition-all hover:shadow-lg hover:-translate-y-1">
      <CardHeader className="flex-row gap-4 items-start pb-4">
        <div className="w-10 h-10 flex items-center justify-center shrink-0">
          <OsIcon os={vm.os} className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg leading-tight">{vm.name}</CardTitle>
          <CardDescription className="mt-1">{vm.ip}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="text-sm text-muted-foreground flex items-center">
          <Cpu className="w-4 h-4 mr-2" />
          <span>{vm.cpu} vCPUs</span>
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <MemoryStick className="w-4 h-4 mr-2" />
          <span>{vm.memory} GB RAM</span>
        </div>
        <div className="text-sm text-muted-foreground flex items-center">
          <Database className="w-4 h-4 mr-2" />
          <span>{vm.storage} GB Storage</span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Badge variant={getStatusVariant(vm.status)}>{vm.status}</Badge>
        <div className="flex gap-1">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" disabled={vm.status !== 'Running'} className="h-8 w-8">
                  <Terminal className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Access VM</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={onToggleStatus} variant="ghost" size="icon" disabled={!isActionable} className="h-8 w-8">
                  {vm.status === 'Running' ? <Square className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{vm.status === 'Running' ? 'Stop' : 'Start'} VM</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={onDelete} variant="ghost" size="icon" className="text-destructive hover:text-destructive h-8 w-8">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Delete VM</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardFooter>
    </Card>
  );
}
