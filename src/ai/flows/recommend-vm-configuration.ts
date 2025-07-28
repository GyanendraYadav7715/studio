'use server';

/**
 * @fileOverview An AI agent that recommends optimal VM configurations based on system load, user feedback, and machine performance metrics.
 *
 * - recommendVMConfiguration - A function that handles the VM configuration recommendation process.
 * - RecommendVMConfigurationInput - The input type for the recommendVMConfiguration function.
 * - RecommendVMConfigurationOutput - The return type for the recommendVMConfiguration function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RecommendVMConfigurationInputSchema = z.object({
  systemLoad: z
    .number()
    .describe('The current system load as a percentage (0-100).'),
  userFeedback: z
    .string()
    .describe('User feedback on current VM performance.'),
  machinePerformanceMetrics: z
    .string()
    .describe(
      'Machine performance metrics, including CPU usage, memory usage, disk I/O, and network I/O.'
    ),
  userRole: z
    .string()
    .describe(
      'The user role, such as developer, tester, or administrator. This will determine the kind of applications they run.'
    ),
  costEffectivenessPreference: z
    .string()
    .describe(
      'The user preference for cost-effectiveness, such as high, medium, or low. This will determine the tradeoff between performance and cost.'
    ),
  applicationsRunning: z
    .string()
    .describe('The applications currently running on the VM.'),
});
export type RecommendVMConfigurationInput = z.infer<
  typeof RecommendVMConfigurationInputSchema
>;

const RecommendVMConfigurationOutputSchema = z.object({
  recommendedConfiguration: z
    .string()
    .describe(
      'The recommended VM configuration, including OS, CPU, memory, and storage.'
    ),
  justification: z
    .string()
    .describe(
      'The justification for the recommended configuration, based on the input metrics and preferences.'
    ),
});
export type RecommendVMConfigurationOutput = z.infer<
  typeof RecommendVMConfigurationOutputSchema
>;

export async function recommendVMConfiguration(
  input: RecommendVMConfigurationInput
): Promise<RecommendVMConfigurationOutput> {
  return recommendVMConfigurationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendVMConfigurationPrompt',
  input: {schema: RecommendVMConfigurationInputSchema},
  output: {schema: RecommendVMConfigurationOutputSchema},
  prompt: `You are an expert system administrator specializing in recommending optimal VM configurations.

  You will use the following information to recommend a VM configuration:

  System Load: {{{systemLoad}}}%
  User Feedback: {{{userFeedback}}}
  Machine Performance Metrics: {{{machinePerformanceMetrics}}}
  User Role: {{{userRole}}}
  Cost-Effectiveness Preference: {{{costEffectivenessPreference}}}
  Applications Running: {{{applicationsRunning}}}

  Based on this information, recommend a VM configuration that will improve performance and reduce costs. Provide a justification for your recommendation.

  Ensure that the recommended configuration is appropriate for the user role and the applications they are running. If the user has a strong preference for cost-effectiveness, prioritize configurations that are less expensive but still provide adequate performance. Give a response as a single string.

  Make sure the recommendation and justification can be completely understood by an expert system administrator.

  \`json
  {
    "recommendedConfiguration": "<recommended configuration>",
    "justification": "<justification>"
  }
  \`
  `,
});

const recommendVMConfigurationFlow = ai.defineFlow(
  {
    name: 'recommendVMConfigurationFlow',
    inputSchema: RecommendVMConfigurationInputSchema,
    outputSchema: RecommendVMConfigurationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
