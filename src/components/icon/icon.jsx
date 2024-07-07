export default function Icon({ size = 16, icon, iconColor }) {
  if (!icon) return null;

  const CurrentIcon = icon;
  return <CurrentIcon size={size} color={iconColor} />;
}
