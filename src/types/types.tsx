export interface Profiles {
  online_profiles: Profile[];
}

export interface Profile {
  url: string;
  label: string;
}

export interface SectionProps {
  children: React.ReactNode;
  paddingTop?: number;
  paddingBottom?: number;
  borderBottom?: boolean;
}

export interface Career {
  to: string;
  from: string;
  employer: string;
  position: string;
}
