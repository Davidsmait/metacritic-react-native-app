import { Pressable, ScrollView, Text } from "react-native";
import { Link } from "expo-router";
import { HomeIcon } from "../components/Icons";
import { styled } from "nativewind";
import { Screen } from "../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
  return (
    <Screen>
      <ScrollView>
        <Link asChild href="/" className="text-blue-500">
          <StyledPressable className={`active:opacity-80`}>
            <HomeIcon />
          </StyledPressable>
        </Link>
        <Text
          className="text-white font-bold text-2xl"
          style={{ marginBottom: 10 }}
        >
          About
        </Text>
        <Text className="text-white text-white/90" style={{ marginBottom: 10 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat
          aliquet nisi vel finibus. Donec pharetra commodo ullamcorper. Ut
          placerat diam nibh, a commodo orci pulvinar quis. Donec nec magna quis
          leo molestie congue at ut risus. Sed mattis vestibulum mauris, id
          aliquam turpis ultrices sit amet. Suspendisse potenti. Etiam ut
          viverra lectus. Cras pretium erat sit amet faucibus elementum. Quisque
          sit amet eros libero. Phasellus gravida vehicula laoreet. Suspendisse
          imperdiet sit amet erat vel hendrerit. Sed feugiat lobortis libero nec
          tristique. Quisque feugiat diam tincidunt enim dapibus rutrum. Integer
          placerat elit non mi porttitor, id accumsan massa feugiat. Fusce
          malesuada volutpat orci. Nullam ut fringilla turpis. Pellentesque sed
          tellus sed sem finibus suscipit eget et ex. Donec id accumsan arcu.
          Aenean quis tempus eros. Integer et laoreet eros. Aliquam vulputate
          sem ut varius sollicitudin. Aliquam finibus felis et urna ullamcorper
          aliquam. Phasellus ornare pellentesque suscipit. In tincidunt suscipit
          purus, eu aliquet urna ultricies ut. Vestibulum ac cursus est. Aliquam
          tempor mi pulvinar, accumsan eros sed, eleifend mauris.
        </Text>
      </ScrollView>
    </Screen>
  );
}
