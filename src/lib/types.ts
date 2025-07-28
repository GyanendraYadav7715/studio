export type VMOS = 'ubuntu' | 'windows' | 'macos';
export type VMStatus = 'Running' | 'Stopped' | 'Creating' | 'Deleting';

export interface VM {
  id: string;
  name: string;
  os: VMOS;
  cpu: number; // in vCPUs
  memory: number; // in GB
  storage: number; // in GB
  status: VMStatus;
  ip: string;
}
