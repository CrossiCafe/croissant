/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Agrega un cargador para archivos PDF
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'static/pdf/', // Ruta donde se guardarán los archivos PDF en la construcción
          },
        },
      ],
    });

    // Importante: Regresa la configuración modificada
    return config;
  },
}

module.exports = nextConfig
