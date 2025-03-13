import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";
import {
  RelativePathString,
  useFocusEffect,
  usePathname,
  useRouter,
} from "expo-router";

type ScreenContextType = {
  screenPath: string;
  handleSaveScreenPath: (value: string) => void;
  handleSetUseSavedPath: (val: boolean) => void;
};

const ScreenContext = createContext<ScreenContextType>({
  screenPath: "/",
  handleSaveScreenPath(value) {},
  handleSetUseSavedPath(val) {},
});

const screenNavigations = [
  "/transactions",
  "/search",
  "/card",
  "/profile",
  "/",
];

const ScreenContextProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [useSavedPath, setUseSavedPath] = useState(true);
  const savedScreenPath = SecureStore.getItem("screenPath");
  const [screenPath, setScreenPath] = useState(
    savedScreenPath ? savedScreenPath : "/"
  );

  // console.log({ pathname }, "PN");
  useFocusEffect(
    // Callback should be wrapped in `React.useCallback` to avoid running the effect too often.
    useCallback(() => {
      // Invoked whenever the route is focused.
      if (useSavedPath) {
        if (pathname !== screenPath && screenNavigations.includes(pathname)) {
          router.replace(screenPath as RelativePathString);
        }
      }

      // Return function is invoked whenever the route gets out of focus.
      return () => {};
    }, [useSavedPath, router])
  );

  const handleSetUseSavedPath = (val: boolean) => {
    setUseSavedPath(val);
  };
  const handleSaveScreenPath = (value: string) => {
    SecureStore.setItem("screenPath", value);
    setScreenPath(value);
  };

  return (
    <ScreenContext.Provider
      value={{ screenPath, handleSaveScreenPath, handleSetUseSavedPath }}
    >
      {children}
    </ScreenContext.Provider>
  );
};

export const useScreenContext = () => {
  const context = useContext(ScreenContext);

  if (!context) {
    throw new Error(
      "useScreenContext hook must be used in a ScreenContext provider"
    );
  }
  return context;
};

export default ScreenContextProvider;
