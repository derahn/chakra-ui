/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import ControlBox from "../ControlBox";
import { useTheme } from "../ThemeProvider";
import { useColorMode } from "../ColorModeProvider";
import VisuallyHidden from "../VisuallyHidden";
import Box from "../Box";

const Switch = forwardRef(
  (
    {
      id,
      name,
      value,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      color,
      defaultChecked,
      isChecked,
      size,
      isDisabled,
      isInvalid,
      onChange,
      onBlur,
      onFocus,
      children,
      ...rest
    },
    ref,
  ) => {
    const { mode } = useColorMode();
    const theme = useTheme();

    let { width, height } = theme.sizes.switch[size];

    const stylesProps = {
      rounded: "full",
      justifyContent: "flex-start",
      width,
      height,
      bg: mode === "dark" ? "whiteAlpha.400" : "gray.300",
      boxSizing: "content-box",
      p: "2px",
      _checked: {
        bg: `${color}.500`,
      },
      _child: {
        transform: `translateX(0)`,
      },
      _checkedAndChild: {
        transform: `translateX(calc(${width} - ${height}))`,
      },
      _focus: {
        boxShadow: "outline",
      },
      _disabled: {
        opacity: 0.5,
      },
    };

    return (
      <Box as="label" display="inline-block" verticalAlign="middle" {...rest}>
        <VisuallyHidden
          as="input"
          type="checkbox"
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledBy}
          id={id}
          ref={ref}
          name={name}
          value={value}
          aria-invalid={isInvalid}
          defaultChecked={defaultChecked}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          checked={isChecked}
          disabled={isDisabled}
        />
        <ControlBox {...stylesProps}>
          <Box
            bg="white"
            transition="transform 250ms"
            rounded="full"
            size={height}
          />
        </ControlBox>
      </Box>
    );
  },
);

Switch.defaultProps = {
  color: "blue",
  size: "md",
};

export default Switch;
