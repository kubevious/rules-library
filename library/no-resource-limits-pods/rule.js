for(var container of item.config.spec.containers)
{
  if (!container.resources.limit)
  {
    warning('No resource limit set');
  }
}