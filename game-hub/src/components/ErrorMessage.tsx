import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from '@chakra-ui/react';

interface Props {
  error: string;
  [key: string]: unknown;
}

function ErrorMessage({ error, ...restProsp }: Props) {
  return (
    <Alert status="error" borderRadius={6} {...restProsp}>
      <AlertIcon />
      <Box>
        <AlertTitle>ERROR</AlertTitle>
        <AlertDescription fontSize="sm" display="inline-block" lineHeight="1">
          {error}
        </AlertDescription>
      </Box>
    </Alert>
  );
}

export default ErrorMessage;
