import AnalyticsConfig from "../Models/Analytics.js";


export const saveAnalyticsConfig = async (req, res) => {
    try {
        const { gtmId, ga4MeasurementId, metaPixelId } = req.body;

        // Validate input
        if (!gtmId || !ga4MeasurementId || !metaPixelId) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const config = new AnalyticsConfig({ gtmId, ga4MeasurementId, metaPixelId });
        await config.save();
        res.status(201).json({ message: 'Configuration saved successfully', config });
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};


export const getAnalyticsConfig = async (req, res) => {
    try {
        const config = await AnalyticsConfig.findOne().sort({ createdAt: -1 });
        if (!config) {
            return res.status(404).json({ message: 'No configuration found' });
        }
        res.json(config);
    } catch (error) {
        res.status(500).json({ error: 'Server error: ' + error.message });
    }
};
