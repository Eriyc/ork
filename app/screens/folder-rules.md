# Your screen goes here !

Do not import anything from react-native (View, Text, etc.) that build your JSX/TSX components in this folder.

Avoid react hooks (useEffect, useRef, useState) at this level. They should be mostly in Components.

The imports to your Higher-Order Components connecting to the redux store (if your project uses redux which we recommend) and their respective connections. 
This means the redux hooks (useDispatch, useSelector, etc.), redux actions, redux selectors (extract useful data for the container from App state) must live here.

Other possible imports could be react-navigation related integrations and possibly a unique library you use for your project which could be put here.