import mongoose from 'mongoose';

const analyticsSchema = new mongoose.Schema({
  gtmId: { type: String },
  gaMeasurementId: { type: String },
  fbPixelId: { type: String },
}, { timestamps: true });

const Analytics = mongoose.model('Analytics', analyticsSchema);
export default Analytics;
