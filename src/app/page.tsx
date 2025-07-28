"use client";

import { useState } from 'react';
import type { VM } from '@/lib/types';
import { Header } from '@/components/layout/header';
import { VmCard } from '@/components/vm-card';
import { Button } from '@/components/ui/button';
import { CreateVmDialog } from '@/components/create-vm-dialog';
import { AiRecommendation } from '@/components/ai-recommendation';
import { PlusCircle } from 'lucide-react';

const initialVms: VM[] = [
  { id: '1', name: 'Dev Server - Frontend', os: 'ubuntu', cpu: 4, memory: 8, storage: 100, status: 'Running', ip: '192.168.1.101' },
  { id: '2', name: 'Windows Test Machine', os: 'windows', cpu: 8, memory: 16, storage: 250, status: 'Stopped', ip: '192.168.1.102' },
  { id: '3', name: 'Mac-mini-M2', os: 'macos', cpu: 12, memory: 32, storage: 500, status: 'Running', ip: '192.168.1.103' },
  { id: '4', name: 'Staging DB', os: 'ubuntu', cpu: 2, memory: 4, storage: 50, status: 'Creating', ip: '192.168.1.104' },
];

export default function Home() {
  const [vms, setVms] = useState<VM[]>(initialVms);
  const [isCreateDialogOpen, setCreateDialogOpen] = useState(false);

  const handleCreateVm = (newVm: Omit<VM, 'id' | 'status' | 'ip'>) => {
    setVms(prevVms => [
      ...prevVms,
      {
        ...newVm,
        id: String(prevVms.length + 1 + Math.random()),
        status: 'Creating',
        ip: `192.168.1.${105 + prevVms.length}`,
      },
    ]);
  };

  const handleDeleteVm = (id: string) => {
    setVms(prevVms => prevVms.filter(vm => vm.id !== id));
  };

  const handleToggleVmStatus = (id: string) => {
    setVms(prevVms =>
      prevVms.map(vm => {
        if (vm.id === id) {
          if (vm.status === 'Running') return { ...vm, status: 'Stopped' };
          if (vm.status === 'Stopped') return { ...vm, status: 'Running' };
        }
        return vm;
      })
    );
  };

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              My Cloud Machines
            </h1>
            <p className="text-muted-foreground mt-1">
              Create, manage, and access your development environments.
            </p>
          </div>
          <Button onClick={() => setCreateDialogOpen(true)}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Create New VM
          </Button>
        </div>
        
        <AiRecommendation />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {vms.map(vm => (
            <VmCard
              key={vm.id}
              vm={vm}
              onToggleStatus={() => handleToggleVmStatus(vm.id)}
              onDelete={() => handleDeleteVm(vm.id)}
            />
          ))}
        </div>
      </main>
      <CreateVmDialog
        open={isCreateDialogOpen}
        onOpenChange={setCreateDialogOpen}
        onCreate={handleCreateVm}
      />
    </>
  );
}
