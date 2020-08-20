const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

// 모듈을 바꿀 일이 있다면 불변성 지키기 어려우니까 Immer 사용해도 돼!
module.exports = withBundleAnalyzer({
    compress: true,
    webpack(config, { webpack }) {
        const prod = process.env.NODE_ENV === 'production';

        return {
            ...config,
            mode: prod ? 'production' : 'development',
            devtool: prod ? 'hidden-source-map' : 'eval',
            plugins: [
                ...config.plugins,
                new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /^\.\/ko$/),
            ],
        };
    },
});
