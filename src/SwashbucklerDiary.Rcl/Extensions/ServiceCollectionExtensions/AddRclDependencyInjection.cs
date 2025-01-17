﻿using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using SwashbucklerDiary.Rcl.Components;

namespace SwashbucklerDiary.Rcl.Extensions
{
    public static partial class ServiceCollectionExtensions
    {
        public static IServiceCollection AddRclDependencyInjection(this IServiceCollection services)
        {
            services.TryAddScoped<ZoomJSModule>();
            services.TryAddScoped<VditorJSModule>();
            services.TryAddScoped<TextareaJSModule>();
            services.TryAddScoped<AudioInterop>();
            return services;
        }
    }
}
