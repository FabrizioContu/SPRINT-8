import React, { ReactNode, createContext, useContext } from "react";

export const Context = createContext<ContextProps | null>(null);

export const useProvider: () => ContextProps = (): ContextProps => {
  const context = useContext(Context);
  if (context == null) {
    throw new Error("useProvider must be used within a ContextProvider");
  }
  return context;
};

interface ContextProviderProps {
  children: ReactNode;
}

interface ContextProps {
  weeksArray: weekExpenses[];
  totalWeekBalance: number;
}

interface weekExpenses {
  [key: string]: number;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
}

export const ContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const weeksArray: weekExpenses[] = [
    {
      monday: 380,
      tuesday: 420,
      wednesday: 80,
      thursday: 180,
      friday: 421,
      saturday: 300,
      sunday: 600,
    },
    {
      monday: 150,
      tuesday: 70,
      wednesday: 205,
      thursday: 720,
      friday: 20,
      saturday: 420,
      sunday: 600,
    },
    {
      monday: 400,
      tuesday: 350,
      wednesday: 156,
      thursday: 60,
      friday: 200,
      saturday: 150,
      sunday: 350,
    },
    {
      monday: 300,
      tuesday: 70,
      wednesday: 50,
      thursday: 150,
      friday: 230,
      saturday: 130,
      sunday: 20,
    },
  ];

  const calculateWeekBalance = (week: weekExpenses): number => {
    return Object.values(week).reduce((total, current) => total + current, 0);
  };

  const totalWeekBalance = calculateWeekBalance(weeksArray[0]);

  return (
    <Context.Provider value={{ weeksArray, totalWeekBalance }}>
      {children}
    </Context.Provider>
  );
};
