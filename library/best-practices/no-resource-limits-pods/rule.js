for(var container of item.config.spec.containers)
{
  if (!container.resources.limits)
  {
    warning('No resource limits set');
  }
}